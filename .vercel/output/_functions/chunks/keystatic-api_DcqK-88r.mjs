import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "local"
    // जेव्हा व्हीएस कोडमध्ये काम करशील तेव्हा लोकल, व्हर्सेलवर असताना क्लाउड आपोआप सिंक होईल
  },
  cloud: {
    project: "skadas-team/finesse-overseas-web"
  },
  collections: {
    intelligence: collection({
      label: "Intelligence Audits",
      slugField: "title",
      path: "src/content/intelligence/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Audit Title (H1 - Entity Trigger)" } }),
        excerpt: fields.text({
          label: "SEO Meta Description (AI Prompt Abstract Summary)",
          multiline: true
        }),
        // 🧠 Phase 1: AI Executive Summary Array Input (AEO / GEO Engine Target)
        keyTakeaways: fields.array(
          fields.text({ label: "Factual Takeaway (Strict facts, no fluff)" }),
          {
            label: "Key Takeaways (Exactly 3 Required for AI Search Snippets)",
            itemLabel: (props) => props.value || "Takeaway Item"
          }
        ),
        publishDate: fields.date({ label: "Initial Publish Date" }),
        // 🛡️ Phase 2: QDF Freshness System
        lastModifiedDate: fields.date({
          label: "Last Modified Date (Update this only when auditing existing content)"
        }),
        author: fields.text({ label: "Author Name", defaultValue: "Rohit Kasture" }),
        authorRole: fields.text({ label: "Author Role / Designation", defaultValue: "Senior Placement Strategist" }),
        category: fields.select({
          label: "Category (Niche Context Node)",
          options: [
            { label: "NMC Alerts", value: "NMC Alerts" },
            { label: "Financial Truths", value: "Financial Truths" },
            { label: "FMGE Data", value: "FMGE Data" },
            { label: "Exposé", value: "Exposé" },
            { label: "Myth Buster", value: "Myth Buster" }
          ],
          defaultValue: "NMC Alerts"
        }),
        isFeatured: fields.checkbox({ label: "Feature this post?", defaultValue: false }),
        coverImage: fields.image({
          label: "Cover Image Payload",
          directory: "src/assets/images/audits",
          publicPath: "../../assets/images/audits/"
        }),
        // 🖼️ Phase 1 & 3: Image AI Accessibility Ingest
        coverImageAlt: fields.text({
          label: "Cover Image Alt Text (Strictly describe the image for Google Crawler)"
        }),
        // 💰 Phase 4: Contextual Hub-Spoke ROI Loop
        moneyPageLink: fields.url({
          label: "Target Hub Page Link (e.g., https://finesseoverseas.com/study-in-germany)"
        }),
        content: fields.document({
          label: "Audit Content Core (Enforce Strict H2 -> H3 Layout Hierarchy)",
          formatting: true,
          dividers: true,
          links: true,
          tables: true
          // डेटा-टेबल ट्रॅप फिक्स करण्यासाठी टेबल्स एनेबल केले आहेत
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
