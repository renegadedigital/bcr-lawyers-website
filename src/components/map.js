import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps"
import React from "react"

import mapStyle from "./mapStyle.json"

const Map = ({ lat, lng }) => (
  <GoogleMap
    defaultCenter={{ lat, lng }}
    defaultZoom={16}
    defaultOptions={{ 
			styles: mapStyle,
			mapTypeControl: false,
			streetViewControl: false
		}}
		defaultStreetView={false}
  >
    <Marker position={{ lat, lng }} />
  </GoogleMap>
)

export default withScriptjs(withGoogleMap(Map))
