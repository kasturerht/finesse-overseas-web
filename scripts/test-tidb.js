// scripts/test-tidb.js
import { connect } from '@tidbcloud/serverless';

const url = 'mysql://3EG6Dp1YBiQZq9t.root:OExhrLg6B5z7fpEV@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/finesse';

async function test() {
  console.log('Connecting to TiDB Cloud (finesse database)...');
  const conn = connect({ url });

  console.log('Creating social_posts table...');
  await conn.execute(`
    CREATE TABLE IF NOT EXISTS social_posts (
      id VARCHAR(64) PRIMARY KEY,
      title VARCHAR(255),
      image_url TEXT NOT NULL,
      caption TEXT NOT NULL,
      scheduled_at DATETIME NOT NULL,
      platforms JSON NOT NULL,
      status VARCHAR(32) DEFAULT 'pending',
      ig_result TEXT,
      fb_result TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      published_at TIMESTAMP NULL,
      INDEX idx_status_scheduled (status, scheduled_at)
    );
  `);

  const tables = await conn.execute('SHOW TABLES;');
  console.log('Tables in finesse DB:', tables);

  // Check columns
  const cols = await conn.execute('DESCRIBE social_posts;');
  console.log('Columns in social_posts:', cols.map(c => c.Field));

  console.log('\n🎉 SUCCESS: TiDB Cloud Serverless database is 100% READY!');
}

test().catch(console.error);
