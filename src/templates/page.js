import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplate = ({ data: { prismicPage: { data } } }) => {
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
			<SEO 
				description={seoDescription || rawContent}
				title={seoTitle}
			/>
			<Helmet
				bodyAttributes={{
					class: "com_content view-category task- itemid-101 body__"
				}}
			>
				>
			</Helmet>

      {!!images && images.length > 0 && (
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

			<div id="content-row">
				<div className="row-container">
					<div className="container">
						<div className="content-inner row">
							<div id="component" className="span12">
								<div id="system-message-container">
									<div id="system-message" />
								</div>
								<div className="page-item page-item__">
									<div className="item_content">
										<div className={`item_fulltext ${(!sideImage || !sideImage.url) && "span8"}`}>
											{sideImage && sideImage.url && (
												<p>
													<img
														src={sideImage.url}
														alt={sideImage.alt}
														style={{ float: "right" }}
														{...sideImage.dimensions}
													/>
												</p>
											)}
											<div dangerouslySetInnerHTML={{ __html: content }} />
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
}

export const pageQuery = graphql`
  query PostById($id: String!) {
    prismicPage(id: { eq: $id }) {
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
				content {
					html
					text
				}
				side_image {
					alt
					dimensions {
						width
						height
					}
					url
				}
				section
				seo_title
				seo_description {
					text
				}
			}
			uid
    }
  }
`

export default PageTemplate
