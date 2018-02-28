const { fetchTopHeadlines, processArticle } = require('../src/gatsby-node');
const { apiKey } = require('../credentials').credentials;

describe('fetchTopHeadlines', () => {
  it('should get top headlines from news api', (done) => {
    fetchTopHeadlines(apiKey)
      .then(topHeadlines=> {
        console.log(topHeadlines.data);
        const { articles } = topHeadlines.data;
        //console.log(JSON.stringify(articles, null, 2));
        done()
      })
      .catch(err=> {
        console.log(err)
        done()
      })
  })
})

describe('processArticle', () => {
  it('should parse each article into an object', () => {
    const sampleArticle = {
      source: { 
        id: null,
        name: "Nypost.com" 
      },
      author: "Mark Moore",
      title: "Trump puts California on notice over border wall",
      description: "President Trump put California on notice in a tweet on Wednesday that he wouldn’t complete his much-promised wall on its border until the entire barrier was erected – even though the st…",
      url: "https://nypost.com/2018/02/28/trump-praises-big-legal-win-for-border-wall/",
      urlToImage: "https://thenypost.files.wordpress.com/2018/02/trump-mexico-wall-feature.jpg?quality=90&strip=all&w=1200",
      publishedAt: "2018-02-28T13:58:09Z"
    }
    //console.log(processArticle(JSON.stringify(sampleArticle)));
  })
})