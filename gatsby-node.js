const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pawilony/" } }
      ) {
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
      path: `/pawilon-${node.frontmatter.id}`,
      component: path.resolve(
        `./src/templates/productTemplate/productTemplate.js`
      ),
      context: {
        id: node.frontmatter.id,
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/404\/$/)) {
    page.matchPath = `/*`
    createPage(page)
  }
}
