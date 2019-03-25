import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeTemplate = ({ data: { prismicHome: { data } } }) => {
	let {
		seo_description: { text: seoDescription },
		seo_title: seoTitle,
		slider_images: images,
    feature_pages: featurePages
	} = data

  const slug = text => text.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()
  const SUMMARY_LENGTH = 200
  const summarize = text => text.length < SUMMARY_LENGTH 
    ? text 
    : (text.substr(0, SUMMARY_LENGTH).replace(/ [^ ]+$/, "") + " [...]")

  featurePages = featurePages.map(({ title, featured_page: featuredPage, summary, thumbnail }) => { 
    const linkedPage = { ...featuredPage.document[0].data, uid: featuredPage.uid }
    return {
      title: title.text || linkedPage.page_title.text,
      thumbnail: thumbnail.url,
      summary: summarize(summary.text || linkedPage.content.text),
      url: "/" + slug(linkedPage.section) + "/" + linkedPage.uid
    }
  })

	images = images
		.map(({ image }) => image)
		.filter(({ url }) => !!url)

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} keywords={[`gatsby`, `application`, `react`]} />
      <Helmet
        bodyAttributes={{
          class: "com_content view-category task- itemid-101 body__"
        }}
      >
        >
      </Helmet>

      {images && images.length && (
        <div id="showcase-row">
          <div className="row-container">
            <div className="container">
              <div className="row">
                <div className="moduletable   span12">
                  <div id="camera-slideshow" className="">
                    {images.map(({ url }) => (
                      <div
                        key={url}
                        className="camera-item"
                        data-src={url}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div id="feature-row">
        <div className="row-container">
          <div className="container">
            <div className="row">
              <div className="moduletable latest_projects  span12">
                <div className="mod_caroufredsel mod_caroufredsel__latest_projects">
                  <div id="list_carousel_carousel1" className="list_carousel">
                    <ul id="caroufredsel_carousel1">
                      {featurePages.map(({ url, thumbnail }) => (
                        <li className="item" key={url}>
                          <div className="item_content">
                            <div className="item_img img-intro mg-intro__">
                              <Link to={url}>
                                <img src={thumbnail} alt="" />
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div
                      id="carousel_carousel1_pag"
                      className="caroufredsel_pagination"
                    />
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content-row">
        <div className="row-container">
          <div className="container">
            <div className="content-inner row">
              <div id="component" className="span12">
                <div id="content-top-row" className="row">
                  <div id="content-top">
                    <div className="moduletable home_items  span12">
                      <div className="mod-newsflash-adv mod-newsflash-adv__home_items">
                        <div className="row">
                          {featurePages.map(({ title, summary, url }) => (
                            <div className="span4 item item_num0 item__module" key={url}>
                              <div className="item_content">
                                <h1 className="item_title item_title__home_items">
                                  {title}
                                </h1>

                                <div className="item_introtext">
                                  <p>
                                    {summary}
                                  </p>
                                </div>

                                <Link
                                  className="btn btn-info readmore"
                                  to={url}
                                >
                                  <span>read more</span>
                                </Link>
                              </div>

                              <div className="clearfix" />
                            </div>
                          ))}
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>

                <div id="system-message-container">
                  <div id="system-message" />
                </div>
                <div className="page-category page-category__" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeById($id: String!) {
    prismicHome(id: { eq: $id }) {
			data {
        feature_pages {
          title { text }
          thumbnail { url }
          summary { text }
          featured_page {
            document {
              data {
                page_title { text }
                section
                content { text }
              }
            }
            uid
          }
        }
				slider_images {
					image {
						alt
						dimensions {
							width
							height
						}
						url
					}
				}
				seo_title
				seo_description {
					text
				}
			}
    }
  }
`

export default HomeTemplate
