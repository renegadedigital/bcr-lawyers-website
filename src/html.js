import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src={withPrefix("/scripts/jquery.min.js")} />
        <script src={withPrefix("/scripts/mootools-core.js")} />
        <script src={withPrefix("/scripts/core.js")} />
        <script src={withPrefix("/scripts/caption.js")} />
        <script src={withPrefix("/scripts/bootstrap.js")} />
        <script src={withPrefix("/scripts/jquery.easing.1.3.js")} />
        <script src={withPrefix("/scripts/jquery.isotope.min.js")} />
        <script src={withPrefix("/scripts/touch.gallery.js")} />
        <script src={withPrefix("/scripts/scripts.js")} />
        <script src={withPrefix("/scripts/jquery.caroufredsel.js")} />
        <script src={withPrefix("/scripts/jquery.touchSwipe.min.js")} />
        <script src={withPrefix("/scripts/jquery.ba-throttle-debounce.min.js")} />
        <script src={withPrefix("/scripts/camera.min.js")} />
        <script src={withPrefix("/scripts/jquery.mobile.customized.min.js")} />
        <script src={withPrefix("/scripts/superfish.js")} />
        <script src={withPrefix("/scripts/jquery.mobilemenu.js")} />
        <script src={withPrefix("/scripts/jquery.hoverIntent.js")} />
        <script src={withPrefix("/scripts/supersubs.js")} />
        <script src={withPrefix("/scripts/sftouchscreen.js")} />
        <script src={withPrefix("/scripts/init.js")} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
