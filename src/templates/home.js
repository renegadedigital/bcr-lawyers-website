import { Helmet } from "react-helmet"

import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectOne from "../images/project-1.jpg"
import projectThree from "../images/project-3.jpg"
import projectTwo from "../images/project-2.jpg"

const HomeTemplate = ({ data: { prismicHome: { data } } }) => {
	let {
		side_image: sideImage,
		content: { html: content, text: rawContent },
		seo_description: { text: seoDescription },
		seo_title: seoTitle,
		slider_images: images,
	} = data

	images = images
		.map(({ image }) => image)
		.filter(({ url }) => !!url)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
                      <li className="item">
                        <div className="item_content">
                          <div className="item_img img-intro mg-intro__left">
                            <Link to="/about-us/welcome">
                              <img src={projectOne} alt="" />
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="item_content">
                          <div className="item_img img-intro mg-intro__">
                            <Link to="/about-us/practical-legal-advice">
                              <img src={projectTwo} alt="" />
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="item_content">
                          <div className="item_img img-intro mg-intro__">
                            <Link to="/about-us/news">
                              <img src={projectThree} alt="" />
                            </Link>
                          </div>
                        </div>
                      </li>
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
                          <div className="span4 item item_num0 item__module">
                            <div className="item_content">
                              <h1 className="item_title item_title__home_items">
                                <span className="item_title_part0">Welcome</span>{" "}
                              </h1>

                              <div className="item_introtext">
                                <p>
                                  Beckwith Cleverdon Rees is a general practice
                                  legal advisory firm located in the heart of
                                  Collins Street, Melbourne offering a broad range
                                  of legal advice relating to Property Law,
                                  Commercial and Business,
                                </p>
                              </div>

                              <Link
                                className="btn btn-info readmore"
                                to="/about-us/welcome"
                              >
                                <span>read more</span>
                              </Link>
                            </div>

                            <div className="clearfix" />
                          </div>

                          <div className="span4 item item_num1 item__module">
                            <div className="item_content">
                              <h1 className="item_title item_title__home_items">
                                <span className="item_title_part0">Practical</span>{" "}
                                <span className="item_title_part1">Legal</span>{" "}
                                <span className="item_title_part2">Advice</span>{" "}
                              </h1>

                              <div className="item_introtext">
                                <p>
                                  Beckwith Cleverdon Rees is law firm based in
                                  Melbourne with a history dating back to the
                                  1860s. The present partners offer broad
                                  experience, will listen to clients needs and
                                  take care of the technical{" "}
                                </p>
                              </div>

                              <Link
                                className="btn btn-info readmore"
                                to="/about-us/practical-legal-advice"
                              >
                                <span>Read More</span>
                              </Link>
                            </div>

                            <div className="clearfix" />
                          </div>

                          <div className="span4 item item_num2 item__module">
                            <div className="item_content">
                              <h1 className="item_title item_title__home_items">
                                <span className="item_title_part0">News</span>{" "}
                              </h1>

                              <div className="item_introtext">
                                <p>
                                  [Friday 21-03-2014] Today{" "}
                                  <span style={{ lineHeight: "1.3em" }}>
                                    Beckwith Cleverdon Rees are proud to announce
                                    the launch of their new website after months
                                    of carefully considered design and
                                    development. With the aim of the project to
                                  </span>
                                </p>
                              </div>

                              <Link
                                className="btn btn-info readmore"
                                to="/about-us/news"
                              >
                                <span>read more</span>
                              </Link>
                            </div>

                            <div className="clearfix" />
                          </div>
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
