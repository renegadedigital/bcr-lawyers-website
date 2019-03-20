const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
	const slug = text => text.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()
  let response = await graphql(`
		{
			allPrismicHome {
				edges {
					node {
						id
					}
				}
			}
		}
  `)

  for( const page of response.data.allPrismicHome.edges ) {
    createPage({
      path: "/",
      component: path.resolve("src/templates/home.js"),
      context: page.node
    })
  }

  response = await graphql(`
		{
			allPrismicContact {
				edges {
					node {
						id
            uid
					}
				}
			}
		}
  `)

  for( const page of response.data.allPrismicContact.edges ) {
    createPage({
      path: `/${page.node.uid}`,
      component: path.resolve("src/templates/contact.js"),
      context: page.node
    })
  }

  response = await graphql(`
		{
			allPrismicPage {
				edges {
					node {
						data { section }
						id
						uid
					}
				}
			}
		}
  `)

  for( const page of response.data.allPrismicPage.edges ) {
    const { id, uid, data: { section } } = page.node
    const urlPath = "/" + [slug(section), uid].filter(a => !!a).join("/")

    createPage({
      path: urlPath,
      component: path.resolve("src/templates/page.js"),
      context: page.node
    })

  }
}

