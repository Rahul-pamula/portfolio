const https = require('https');
const fs = require('fs');

const repos = [
  'Rahul-pamula/StudyPilot',
  'Rahul-pamula/Chatnalyxer',
  'Rahul-pamula/Email_to_telebot',
  'Rahul-pamula/civic_sense',
  'Rahul-pamula/agent-toolkit',
  'Rahul-pamula/goaframe',
  'Rahul-pamula/Traveloop',
  'Rahul-pamula/ShrFlow-V1',
  'Rahul-pamula/AI_FINANCE_MENTOR',
  'Rahul-pamula/fastapi-template',
  'LifeSimLabs/financial-literacy-simulator'
];

async function fetchRepo(repo) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${repo}`,
      method: 'GET',
      headers: { 'User-Agent': 'Node.js' }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  const results = {};
  for (const repo of repos) {
    console.log(`Fetching ${repo}...`);
    try {
      const data = await fetchRepo(repo);
      results[repo] = {
        name: data.name,
        description: data.description,
        html_url: data.html_url,
        homepage: data.homepage,
        stargazers_count: data.stargazers_count,
        forks_count: data.forks_count,
        language: data.language,
        topics: data.topics,
        created_at: data.created_at,
        updated_at: data.updated_at
      };
    } catch(e) {
      console.error(`Error fetching ${repo}: ${e}`);
    }
  }
  fs.writeFileSync('repos_data.json', JSON.stringify(results, null, 2));
  console.log('Done.');
}
main();
