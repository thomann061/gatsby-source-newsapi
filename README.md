# gatsby-source-newsapi

Source plugin for pulling data into Gatsby from an unofficial NewsAPI JSON
endpoint.

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

Get all posts with the preview image ID and the author's name:

```graphql
query StoriesQuery {
  allMediumPost(sort: { fields: [createdAt], order: DESC }) {
    edges {
      node {
        id
        title
        virtuals {
          subtitle
          previewImage {
            imageId
          }
        }
        author {
          name
        }
      }
    }
  }
}
```

Get all users with their posts:

```graphql
query StoriesQuery {
  allMediumUser {
    edges {
      node {
        name
        posts {
          title
        }
      }
    }
  }
}
```