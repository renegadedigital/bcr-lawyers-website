import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
					<title>{data.site.siteMetadata.title}</title>
          <link href="//fonts.googleapis.com/css?family=Six+Caps" rel="stylesheet" type="text/css" />
        </Helmet>
        <div id="wrapper">
          <Header />
          {children}
          <div id="push" />
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
