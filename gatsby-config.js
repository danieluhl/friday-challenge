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
    indexName: `challenges`,
    transformer: ({ data }) => data.allMarkdownRemark.edges.map(({ node }) => node),
  }
];

module.exports = {
  siteMetadata: {
    title: 'Friday Challenges',
    algolia: {
      appId: process.env.ALGOLIA_APPID ? process.env.ALGOLIA_APPID : '',
      searchOnlyApiKey: process.env.ALGOLIA_APIKEY
        ? process.env.ALGOLIA_APIKEY
        : '',
      indexName: 'challenges'
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
        appId: process.env.ALGOLIA_APPID,
        apiKey: process.env.ALGOLIA_APIKEY,
        queries
      }
    }
  ]
};
