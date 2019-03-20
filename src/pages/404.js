import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="content-row">
      <div className="row-container">
        <div className="container">
          <div className="content-inner row">
            <div id="component" className="span12">
              <div id="system-message-container">
                <div id="system-message" />
              </div>
              <div className="page-item page-item__">
                <div className="item_content" style={{ textAlign: "center" }}>
                  <div className="item_fulltext">
                    <h1>What you're looking for isn't here!</h1>
                    <p>Head back <Link to="/">home</Link> and try again.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
