import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

import logo from "../images/logo.png"

const url = (...parts) => "/" + parts
  .map(part => part.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase())
  .join("/")

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
      const menu = {}
      pages.forEach(({ node: { uid, data: { section, page_title: { text: title } } } }) => {
        if( !menu[section] ) menu[section] = []
        menu[section].push({ title, uid })
      })

      return (
        <div id="header-row">
          <div className="row-container">
            <div className="container">
              <header>
                <div className="row">
                  <div id="logo" className="span3">
                    <Link to="/">
                      <img
                        src={logo}
                        alt="Beckwith Cleverdon Rees Lawyers Solicitors Barristers Melbourne"
                      />
                    </Link>
                  </div>

                  <div className="moduletable navigation  span9">
                    <ul className="sf-menu">
                      <li className="item-101 current active">
                        <Link to="/">
                          <em>Home</em>
                        </Link>
                      </li>

                      {Object.entries(menu).map(([section, links]) => (
                        <li key={section}>
                          <span className="separator">
                            <em>{section}</em>
                          </span>

                          <ul>
                            {links.map(({ title, uid }) => (
                              <li key={uid}>
                                <Link to={url(section, uid)}>
                                  <em>{title}</em>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}

                      <li className="item-102">
                        <Link to="/contact-melbourne-lawyer-solicitor-barrister-collins-street-melbourne">
                          <em>Contact</em>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      )
    }}
  />
)
