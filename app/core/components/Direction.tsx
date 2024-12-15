"use client"
import React from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
/// <reference types="@types/googlemaps" />

const containerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

export default function Direction() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AlzaSyDnqBk4dWnvOfGepxNt_DhW3ykItVJKd_A",
  })

  const [, setMap] = React.useState<google.maps.Map | null>(null)

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className=" w-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  )
}
