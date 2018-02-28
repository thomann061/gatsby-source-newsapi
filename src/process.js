const uuidv4 = require('uuid/v4')
const crypto = require(`crypto`)

exports.process = article => {
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