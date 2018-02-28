const axios = require(`axios`)
const crypto = require(`crypto`)
const uuidv4 = require('uuid/v4')

const fetchTopHeadlines = apiKey => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  return axios.get(url);
}

const processArticle = article => {
  return {
    ...article,
    // Required fields.
    id: uuidv4(),
    parent: null, // or null if it's a source node without a parent
    children: [],
    internal: {
      type: `NewsApiTopHeadlines`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(article))
        .digest(`hex`),
      // mediaType: `text/markdown`, // optional
      // content: JSON.stringify(fieldData), // optional
    }
  }
}

exports.sourceNodes = async ({ boundActionCreators }, { apiKey }) => {
  const { createNode } = boundActionCreators;

  // Do the initial fetch
  console.time(`fetch NewsAPI data`)
  console.log(
    `starting to fetch data from NewsAPI.`
  )

  // Create nodes here, generally by downloading data
  // from a remote API.
  const { articles } = await fetchTopHeadlines(apiKey).data;

  console.timeEnd(`fetched NewsAPI data`)

  // Process data into nodes.
  articles.forEach(article => createNode(processArticle(article)));

  // We're done, return.
  return;
};

// export to test these functions
module.exports = { fetchTopHeadlines, processArticle };