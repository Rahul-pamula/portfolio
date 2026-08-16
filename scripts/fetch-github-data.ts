import https from 'https';
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../src/data/generated');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const USERNAME = 'Rahul-pamula';

// Headers for REST API
const getHeaders = () => {
  const headers: Record<string, string> = {
    'User-Agent': 'Portfolio-Build-Script'
  };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
};

// Fetch helper
async function fetchJson(url: string) {
  return new Promise<unknown>((resolve, reject) => {
    https.get(url, { headers: getHeaders() }, (res) => {
      if (res.statusCode === 403 || res.statusCode === 401) {
        console.warn(`[API] Rate limited or unauthorized for ${url}`);
        return resolve(null);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function fetchHtml(url: string) {
  return new Promise<string>((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve(html));
    }).on('error', reject);
  });
}

async function fetchContributions() {
  console.log(`[Scrape] Fetching contribution graph for ${USERNAME}...`);
  try {
    const html = await fetchHtml(`https://github.com/users/${USERNAME}/contributions`);
    const $ = cheerio.load(html);
    
    // Parse total contributions
    const heading = $('h2.f4.text-normal.mb-2').text().trim();
    const totalMatch = heading.match(/([\d,]+)\s*contributions/);
    const totalContributions = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0;
    
    // Parse days
    const cells = $('td.ContributionCalendar-day');
    const days: { date: string; count: number; level: number }[] = [];
    
    cells.each((_, el) => {
      const date = $(el).attr('data-date');
      const level = $(el).attr('data-level');
      const id = $(el).attr('id');
      if (date && id) {
        const tooltip = $(`tool-tip[for="${id}"]`).text().trim();
        let count = 0;
        if (tooltip) {
          const match = tooltip.match(/^([\d,]+|No) contributions? on /);
          if (match) {
            count = match[1] === 'No' ? 0 : parseInt(match[1].replace(/,/g, ''), 10);
          }
        }
        days.push({ date, count, level: parseInt(level || '0', 10) });
      }
    });

    // Sort days chronologically (GitHub HTML renders by day of week)
    days.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return {
      totalLastYear: totalContributions,
      days
    };
  } catch (error) {
    console.error('[Error] Failed to fetch contributions:', error);
    return null;
  }
}

async function fetchActivityAndStats() {
  console.log(`[API] Fetching public events and user stats for ${USERNAME}...`);
  try {
    const [user, events] = await Promise.all([
      fetchJson(`https://api.github.com/users/${USERNAME}`),
      fetchJson(`https://api.github.com/users/${USERNAME}/events/public`)
    ]);

    const activityFeed = [];

    if (events && Array.isArray(events)) {
      for (const event of (events as unknown[])) {
        const ev = event as { type: string, id: string, repo: { name: string }, created_at: string, payload: { action?: string, commits?: unknown[] } };
        // Collect live activity feed
        if (activityFeed.length < 15) {
          activityFeed.push({
            id: ev.id,
            type: ev.type,
            repo: ev.repo.name,
            created_at: ev.created_at,
            payload: ev.payload
          });
        }
      }
    }

    let exactStats = { commits: 0, prs: 0, issues: 0 };
    try {
      const [commitsData, prsData, issuesData] = await Promise.all([
        fetchJson(`https://api.github.com/search/commits?q=author:${USERNAME}`),
        fetchJson(`https://api.github.com/search/issues?q=author:${USERNAME}+type:pr`),
        fetchJson(`https://api.github.com/search/issues?q=author:${USERNAME}+type:issue`)
      ]);
      
      exactStats.commits = (commitsData as any)?.total_count || 0;
      exactStats.prs = (prsData as any)?.total_count || 0;
      exactStats.issues = (issuesData as any)?.total_count || 0;
      console.log(`[API] Exact stats found: ${exactStats.commits} commits, ${exactStats.prs} PRs, ${exactStats.issues} issues`);
    } catch (e) {
      console.warn('[API] Could not fetch exact stats from search API, falling back to 0');
    }

    return {
      user: user || {},
      activityFeed,
      recentStats: exactStats
    };
  } catch (error) {
    console.error('[Error] Failed to fetch API data:', error);
    return null;
  }
}

async function main() {
  const OUT_PATH = path.join(DATA_DIR, 'github-data.json');
  
  // Load fallback if exists
  let existingData: any = {};
  if (fs.existsSync(OUT_PATH)) {
    existingData = JSON.parse(fs.readFileSync(OUT_PATH, 'utf-8'));
  }

  const [contributions, apiData] = await Promise.all([
    fetchContributions(),
    fetchActivityAndStats()
  ]);

  if (!contributions && !apiData) {
    console.log('[Warn] All fetches failed. Using existing verified data if available.');
    return;
  }

  const finalData = {
    updatedAt: new Date().toISOString(),
    contributions: contributions || existingData.contributions || { totalLastYear: 0, days: [] },
    user: apiData?.user || existingData.user || {},
    activityFeed: apiData?.activityFeed || existingData.activityFeed || [],
    recentStats: apiData?.recentStats || existingData.recentStats || { commits: 0, prs: 0, issues: 0 }
  };

  fs.writeFileSync(OUT_PATH, JSON.stringify(finalData, null, 2));
  console.log('[Success] Wrote GitHub data to src/data/generated/github-data.json');
}

main().catch(console.error);
