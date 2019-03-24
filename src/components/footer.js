import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

import chunk from "lodash/chunk"


export default () => (
  <StaticQuery 
    query={graphql`
      {
        allPrismicPage( sort: { fields: [last_publication_date] } ) {
          edges {
            node {
              uid
              data {
                section
                page_title { text }
              }
            }
          }
        }
      }
    `}
    render={({ allPrismicPage: { edges: pages } }) => {
      const columns = chunk(
        pages
          .filter(page => page.node.data.section === "Services")
          .map(page => ({
            url: `/services/${page.node.uid}`,
            title: page.node.data.page_title.text
          })), 
        2
      )

      return (
        <>
          <div id="footer-wrapper">
            <div id="footer-row">
              <div className="row-container">
                <div className="container">
                  <div id="footer" className="row">
                    <div className="moduletable   span12">
                      <div className="mod-custom mod-custom__">
                        <div className="row">
                          {columns.map((links, l) => (
                            <div className="item span4" key={l}>
                              {l === 0 && <h1>Legal Advice &amp; Services</h1>}
                              {l !== 0 && <h1>&nbsp;</h1>}
                              <ul>
                                {links.map(({ url, title }) => (
                                  <li key={url}>
                                    <Link
                                      to={url}
                                      target="_self"
                                    >
                                        {title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="copyright-row">
              <div className="row-container">
                <div className="container">
                  <div id="copyright" className="row">
                    <div className="moduletable   span6">
                      <div className="mod-footer mod-footer__">
                        <span className="siteName">
                          Beckwith Cleverdon Rees Lawyers Solicitors Barristers
                          Melbourne{" "}
                        </span>
                        &copy; 2019
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="back-top">
            <a href="#top">
              <span />
            </a>
          </div>
        </>
      )
    }}
  />
)
