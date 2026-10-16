// src/pages/api/cron/publish-social.ts
// ☁️ Enterprise Vercel Cloud Serverless Social Media Dispatcher
// Executes daily at 11:00 AM IST (05:30 UTC) with 100% Zero-PC Dependency.
import type { APIRoute } from 'astro';
import socialQueue from '../../../data/social-queue.json';

export const prerender = false;

const CRON_SECRET = process.env.CRON_SECRET || 'finesse_cloud_cron_2026_super_secure_token';
const PERMANENT_TOKEN_FALLBACK =
  'EAANhZBRKnTpsBStZB7ZCNmJikD9NeQ0MMAvoFyZBSxFgFA74l3TNtfZAOrhFlhrMemqSfBNHoZABzjwSUYgghhRcOgPtHLnOwdQNJsaSJBOHeZB9rauCu2m1QZBKPAddOICHAY6669tZAkc01aBrvLvfoFQ3UCylhgxRSElZCdreFMmHkp4CjGHPU0AcZBf34qj9g2Y498ZD';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const secretParam = url.searchParams.get('secret');
  const authHeader = request.headers.get('authorization');
  const isVercelCron = request.headers.get('x-vercel-cron') !== null;
  const isDryRun = url.searchParams.get('dry_run') === 'true';

  // Authorization check
  const isAuthorized =
    isVercelCron ||
    secretParam === CRON_SECRET ||
    authHeader === `Bearer ${CRON_SECRET}` ||
    isDryRun;

  if (!isAuthorized) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Invalid Cron Secret' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const token = process.env.META_PAGE_ACCESS_TOKEN || PERMANENT_TOKEN_FALLBACK;
  const pageId = process.env.META_PAGE_ID || '101105755777020';
  const igId = process.env.META_INSTAGRAM_ACCOUNT_ID || '17841450168474580';

  // Get current date & time in IST (Asia/Kolkata)
  const now = new Date();
  const istDateStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(now);
  const istTimeStr = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);

  // Status check only
  if (isDryRun) {
    return new Response(
      JSON.stringify({
        status: 'online',
        engine: 'Vercel Cloud Serverless Social Media Dispatcher',
        istCurrentDate: istDateStr,
        istCurrentTime: istTimeStr,
        tokenConfigured: !!token,
        tokenPrefix: token ? token.slice(0, 15) + '...' : null,
        queueCount: socialQueue.length,
        upcomingPosts: socialQueue
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const forceId = url.searchParams.get('force_id');
  const results: any[] = [];

  for (const post of socialQueue) {
    const isTargetPost = forceId ? post.id === forceId : post.scheduledDate === istDateStr;

    // Check if post is targeted for today (or forced)
    if (isTargetPost) {
      const postScheduledTime = post.scheduledTime || '00:00';

      // If scheduled time has not yet arrived and not forced, keep waiting
      if (!forceId && istTimeStr < postScheduledTime) {
        results.push({
          id: post.id,
          studentName: post.studentName,
          status: 'waiting_for_time',
          scheduledTime: `${postScheduledTime} IST`,
          currentTime: `${istTimeStr} IST`,
          message: `Scheduled for ${postScheduledTime} IST. Waiting for target time.`
        });
        continue;
      }

      console.log(`[Cloud Cron] Processing post: ${post.id} (${post.studentName}) at ${istTimeStr} IST`);

      const postResult: any = {
        id: post.id,
        studentName: post.studentName,
        scheduledDate: post.scheduledDate,
        instagram: null,
        facebook: null
      };

      // 1. INSTAGRAM DISPATCH
      if (post.platforms.includes('instagram')) {
        try {
          // Idempotency check: see if already published today
          const recentIgRes = await fetch(
            `https://graph.facebook.com/v21.0/${igId}/media?fields=caption,timestamp&limit=5&access_token=${token}`
          );
          const recentIg = await recentIgRes.json();
          const alreadyPublished = recentIg.data?.some((m: any) =>
            m.caption && m.caption.includes(post.studentName)
          );

          if (alreadyPublished) {
            postResult.instagram = { status: 'skipped', reason: 'Already published on Instagram' };
          } else {
            // Create container
            const cRes = await fetch(`https://graph.facebook.com/v21.0/${igId}/media`, {
              method: 'POST',
              body: new URLSearchParams({
                image_url: post.imageUrl,
                caption: post.caption,
                access_token: token
              })
            });
            const cData = await cRes.json();

            if (cData.id) {
              // Wait 3 seconds for Meta processing
              await new Promise((r) => setTimeout(r, 3000));

              // Publish
              const pRes = await fetch(`https://graph.facebook.com/v21.0/${igId}/media_publish`, {
                method: 'POST',
                body: new URLSearchParams({
                  creation_id: cData.id,
                  access_token: token
                })
              });
              const pData = await pRes.json();
              postResult.instagram = {
                status: pData.id ? 'success' : 'failed',
                mediaId: pData.id || null,
                error: pData.error || null
              };
            } else {
              postResult.instagram = { status: 'failed', error: cData.error };
            }
          }
        } catch (err: any) {
          postResult.instagram = { status: 'error', message: err.message };
        }
      }

      // 2. FACEBOOK DISPATCH
      if (post.platforms.includes('facebook')) {
        try {
          // Idempotency check: see if already published or scheduled
          const schedRes = await fetch(
            `https://graph.facebook.com/v21.0/${pageId}/scheduled_posts?access_token=${token}`
          );
          const schedData = await schedRes.json();
          const isScheduled = schedData.data?.some((p: any) =>
            p.message && p.message.includes(post.studentName)
          );

          const feedRes = await fetch(
            `https://graph.facebook.com/v21.0/${pageId}/feed?limit=5&access_token=${token}`
          );
          const feedData = await feedRes.json();
          const isPublished = feedData.data?.some((p: any) =>
            p.message && p.message.includes(post.studentName)
          );

          if (isScheduled || isPublished) {
            postResult.facebook = {
              status: 'skipped',
              reason: isScheduled ? 'Already scheduled on Facebook' : 'Already published on Facebook'
            };
          } else {
            // Direct photo publish to Facebook
            const fbRes = await fetch(`https://graph.facebook.com/v21.0/${pageId}/photos`, {
              method: 'POST',
              body: new URLSearchParams({
                url: post.imageUrl,
                caption: post.caption,
                access_token: token
              })
            });
            const fbData = await fbRes.json();
            postResult.facebook = {
              status: fbData.id ? 'success' : 'failed',
              photoId: fbData.id || null,
              error: fbData.error || null
            };
          }
        } catch (err: any) {
          postResult.facebook = { status: 'error', message: err.message };
        }
      }

      results.push(postResult);
    }
  }

  return new Response(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      istDate: istDateStr,
      istTime: istTimeStr,
      processedCount: results.length,
      results
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

export const POST = GET;
