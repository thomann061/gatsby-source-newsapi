const { fetch } = require('./fetch');
const { process } = require('./process');

exports.sourceNodes = async ({ boundActionCreators }, { apiKey }) => {
  const { createNode } = boundActionCreators;

  // Do the initial fetch
  console.time(`\nFetch NewsAPI data`)
  console.log(`Starting to fetch data from NewsAPI...`)

  // Create nodes here, generally by downloading data
  // from a remote API.
  const data = await fetchTopHeadlines(apiKey);
  console.timeEnd(`\nFetch NewsAPI data`)

  // Process data into nodes.
  const { articles } = data.data;
  articles.forEach(article => createNode(processArticle(article)));

  // We're done, return.
  return;
};