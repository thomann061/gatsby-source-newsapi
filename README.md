# gatsby-source-newsapi

Source plugin for pulling data into Gatsby from [NewsAPI](https://newsapi.org/).

## Install

`npm i --save gatsby-source-newsapi`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-newsapi`,
    options: {
      apiKey: `YOUR_NEWSAPI_KEY_HERE`,
    },
  },
];
```

## How to query

Get the Top Headlines

```graphql
{
  allNewsApiTopHeadlines {
    edges {
      node {
        source {
          id
          name
        }
        title
        author
        description
        url
        urlToImage
        publishedAt
      }
    }
  }
}
```