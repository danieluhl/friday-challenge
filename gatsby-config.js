require('dotenv').config({
  path: `.env`
});

// gatsby-config.js
const query = `{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}`;

const queries = [
  {
    query,
    indexName: `challenges`
  }
];

module.exports = {
  siteMetadata: {
    title: 'Friday Challenges',
    algolia: {
      appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : '',
      searchOnlyApiKey: process.env.ALGOLIA_API_KEY
        ? process.env.ALGOLIA_API_KEY
        : '',
      indexName: process.env.ALGOLIA_INDEX_NAME
        ? process.env.ALGOLIA_INDEX_NAME
        : ''
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries
      }
    }
  ]
};
