import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import React, { useState } from "react"
import classnames from "classnames"
import useInputValue from "@rehooks/input-value"

import Layout from "../components/layout"
import Map from "../components/map"
import SEO from "../components/seo"

const SENT = 1
const ERROR = 2

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const send = (data, onSent, onError) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...data })
  })
    .then(onSent)
    .catch(() => onError(new Error("Unable to send email - try again later")))
}

const ContactTemplate = ({ data: { prismicContact: { data } } }) => {
	let {
    street_address: streetAddress,
    suburb,
    state,
    postcode,
    phone_number: phoneNumber,
    fax_number: faxNumber,
    location: {
      latitude: lat,
      longitude: lng,
    },
    seo_title: seoTitle,
    seo_description: {
      text: seoDescription
    }
	} = data

  const form = {
    name: useInputValue(""),
    email: useInputValue(""),
    subject: useInputValue(""),
    message: useInputValue(""),
  }

  const [status, setStatus] = useState()
  const [error, setError] = useState()
  const [invalid, setInvalid] = useState({})

  const getFormData = () => ({
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  })

  const onSent = () => {
    setStatus(SENT)
    setError()
  }

  const onError = e => {
    setStatus(ERROR)
    setError(e)
  }

  const valid = () => {
    const { name, email, subject, message } = getFormData()
    const invalid = {
      name: !name,
      email: !email || !/.@./.test(email),
      subject: !subject,
      message: !message
    }


    setInvalid(invalid)
    for( let fieldInvalid of Object.values(invalid) )
      if( fieldInvalid ) return false

    return true
  }

	return (
		<Layout>
			<SEO 
				description={seoDescription}
				title={seoTitle}
			/>
			<Helmet
				bodyAttributes={{
					class: "com_content view-category task- itemid-101 body__"
				}}
			>
				>
			</Helmet>

			<div id="content-row">
				<div className="row-container">
					<div className="container">
						<div className="content-inner row">
							<div id="component" className="span12">
								<div className="page page-contact">
									<div className="row-fluid">
										<div className="span12">
                      <Map
                        lat={lat}
                        lng={lng}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAWntp1L3bZFpMtJuo6WpHwEbkmPU6Ftss&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div className="contact_map" id="contact_map" />}
                        mapElement={<div style={{ height: `100%` }} />}
                      />
                    </div>
									</div>

									<div className="row-fluid">
										<div className="span3">
											<div className="contact_details">
												<div className="contact_details_item">
													<h4>Address:</h4>
													<i className="icons-marker icon-home" />
													<div className="contact_address">
														{streetAddress}
														<br />
														{suburb}
														<br />
														{state} {postcode}
														<br />
													</div>
												</div>

												<div className="contact_details_item">
													<h4>Phones:</h4>
													<i className="icons-marker icon-phone" />
													<div className="contact_details_telephone">{phoneNumber}</div>
													<div className="clearfix" />

													<i className="icons-marker icon-printer" />
													<div className="contact_details_fax">{faxNumber}</div>
													<div className="clearfix" />
												</div>

												<div className="contact_details_item" />
											</div>
										</div>

										<div className="span9">
											<div className="contact_form">
                        {status === SENT && (
                          <>
                            <h1>Enquiry sent!</h1>
                            <p>Thank you for getting in touch. If requested, we'll get back to you as soon as we can.</p>
                          </>
                        )}
                        {status !== SENT && (
                          <form
                            action="/contact-melbourne-lawyer-solicitor-barrister-collins-street-melbourne"
                            className="form-validate"
                            id="contact-form"
                            data-netlify="true"
                            name="contact"
                            netlify-honeypot="bot-field"
                            onSubmit={e => { 
                              e.preventDefault()
                              if( valid() )
                                send(getFormData(), onSent, onError); 
                            }}
                          >
                            <fieldset>
                              <p style={{ display: "none" }}>
                                <label>Don't fill this in please.</label>
                                <input name="bot-field" />
                              </p>
                              <p>
                                <i className="muted">
                                  Send an email. All fields with an * are required.
                                </i>
                              </p>
                              {!!error && (
                                <p>
                                  <i className="error" style={{ color: "red" }}>
                                    {error.message || error}
                                  </i>
                                </p>
                              )}
                              <div className="clearfix" />

                              <div className="row-fluid">
                                <div className="span4">
                                  <label
                                    id="jform_contact_name-lbl"
                                    htmlFor="jform_contact_name"
                                    className={classnames({ hasTip: true, required: true, invalid: invalid.name })}
                                    title="Name::Your name"
                                  >
                                    Name<span className="star">&#160;*</span>
                                  </label>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="name"
                                      id="jform_contact_name"
                                      className={classnames({ required: true, invalid: invalid.name })}
                                      size="30"
                                      {...form.name}
                                    />
                                  </div>
                                </div>
                                <div className="span4">
                                  <label
                                    id="jform_contact_email-lbl"
                                    htmlFor="jform_contact_email"
                                    className={classnames({ hasTip: true, required: true, invalid: invalid.email })}
                                    title="Email::Email for contact"
                                  >
                                    Email<span className="star">&#160;*</span>
                                  </label>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="email"
                                      className={classnames({ required: true, invalid: invalid.email })}
                                      id="jform_contact_email"
                                      size="30"
                                      {...form.email}
                                    />
                                  </div>
                                </div>
                                <div className="span4">
                                  <label
                                    id="jform_contact_emailmsg-lbl"
                                    htmlFor="jform_contact_emailmsg"
                                    className={classnames({ hasTip: true, required: true, invalid: invalid.subject })}
                                    title="Subject::Enter the subject of your message here ."
                                  >
                                    Subject<span className="star">&#160;*</span>
                                  </label>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      name="subject"
                                      id="jform_contact_emailmsg"
                                      className={classnames({ required: true, invalid: invalid.subject })}
                                      size="60"
                                      {...form.subject}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row-fluid">
                                <div className="span12">
                                  <label
                                    id="jform_contact_message-lbl"
                                    htmlFor="jform_contact_message"
                                    className={classnames({ hasTip: true, required: true, invalid: invalid.message })}
                                    title="Message::Enter your message here."
                                  >
                                    Message<span className="star">&#160;*</span>
                                  </label>
                                  <div className="controls">
                                    <textarea
                                      name="message"
                                      id="jform_contact_message"
                                      cols="50"
                                      rows="10"
                                      className={classnames({ required: true, invalid: invalid.message })}
                                      {...form.message}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="controls">
                                <button className="btn validate btn-primary pull-right" type="submit">
                                  Send Email
                                </button>
                              </div>
                            </fieldset>
                          </form>
                        )}
											</div>
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
  query ContactById($id: String!) {
    prismicContact(id: { eq: $id }) {
			data {
        street_address
        suburb
        state
        postcode
        phone_number
        fax_number
        location {
          latitude
          longitude
        }
        recipients {
          name
          email_address
        }
				seo_title
				seo_description {
					text
				}
			}
    }
  }
`

export default ContactTemplate
