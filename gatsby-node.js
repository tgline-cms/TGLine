const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pavilions/" } }) {
        edges {
          node {
            frontmatter {
              id
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/pavilion-${node.frontmatter.id}`,
      component: path.resolve(`./src/templates/productTemplate/productTemplate.js`),
      context: {
        id: node.frontmatter.id,
      },
    })
  })
}
