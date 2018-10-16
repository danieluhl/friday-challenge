/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    // console.log(node.frontmatter.date);
    // console.log(createFilePath({ node, getNode, basePath: `pages` }));
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `challenge/${node.frontmatter.date}`,
          component: path.resolve(`./src/templates/challenge.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            date: node.frontmatter.date
          }
        });
      });
      resolve();
    });
  });
};
