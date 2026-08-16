const https = require('https');
const fs = require('fs');

const username = 'Rahul-pamula';

function fetchPage(page) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/users/${username}/repos?per_page=100&page=${page}&sort=updated`,
      method: 'GET',
      headers: { 'User-Agent': 'Node.js' }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed with status ${res.statusCode}: ${data}`));
          return;
        }
        resolve(JSON.parse(data));
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  let allRepos = [];
  let page = 1;
  while (true) {
    console.log(`Fetching page ${page}...`);
    try {
      const repos = await fetchPage(page);
      if (repos.length === 0) break;
      allRepos = allRepos.concat(repos);
      page++;
    } catch (e) {
      console.error(e);
      break;
    }
  }
  
  const results = {};
  for (const repo of allRepos) {
    if (!repo.private) {
      results[repo.full_name] = {
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        topics: repo.topics,
        created_at: repo.created_at,
        updated_at: repo.updated_at
      };
    }
  }
  fs.writeFileSync('all_repos_data.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${Object.keys(results).length} repos.`);
}
main();
