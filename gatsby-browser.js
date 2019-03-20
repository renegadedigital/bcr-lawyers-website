import "./src/styles/bootstrap.css"
import "./src/styles/camera.css"
import "./src/styles/caroufredsel.css"
import "./src/styles/default.css"
import "./src/styles/responsive.css"
import "./src/styles/superfish-navbar.css"
import "./src/styles/superfish-vertical.css"
import "./src/styles/superfish.css"
import "./src/styles/template.css"
import "./src/styles/touch.gallery.css"

import { withPrefix } from "gatsby"

const scripts = {}

const addJS = src => {
  const s = document.createElement(`script`)
  s.type = `text/javascript`
  s.src = src

  if( scripts[src] ) document.getElementsByTagName("head")[0].replaceChild(s, scripts[src])
  else document.getElementsByTagName("head")[0].appendChild(s)
  scripts[src] = s
}

export const onRouteUpdate = () => {
  addJS(withPrefix("/scripts/init-mobile-menu.js"))
  addJS(withPrefix("/scripts/init-camera-slideshow.js"))
  addJS(withPrefix("/scripts/init-carousel.js"))

}
