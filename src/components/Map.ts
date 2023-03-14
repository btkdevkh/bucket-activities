import "../assets/css/Map.css"
import { GeoPoint } from "firebase/firestore"
import markerUndone from "../assets/img/marker.png"
import markerDone from "../assets/img/marker_done.png"
import { IBucket } from "../types/IBucket"

let map: any
const position = new GeoPoint(48.858159, 2.294497)

// Initialize and add the map
export function initMap() {
  const mapIdElement = document.getElementById("map") as HTMLElement
  if (mapIdElement === null) return

  map = new google.maps.Map(mapIdElement, {
    zoom: 3,
    center: { lat: position.latitude, lng: position.longitude },
    streetViewControl: false,
  })

  initPanorama(position)
  resetPanorama(true)

  resetMap()
}

export function addMarker(datum: IBucket) {
  const marker = new google.maps.Marker({
    position: {
      lat: datum.coordinates.latitude,
      lng: datum.coordinates.longitude,
    },
    map: map,
    icon: {
      url: datum.done ? markerDone : markerUndone,
      scaledSize: new google.maps.Size(50, 50),
    },
  })

  marker.addListener("click", () => {
    map.setZoom(15)
    map.setCenter(marker.getPosition())
    map.setMapTypeId("satellite")
  })
}

function resetMap() {
  const resetMapBtn = document.querySelector(
    "[data-reset-map]"
  ) as HTMLButtonElement

  resetMapBtn.addEventListener("click", () => {
    map.setZoom(3)
    map.setCenter({ lat: position.latitude, lng: position.longitude })
    map.setMapTypeId("roadmap")
    resetPanorama(true)
  })
}

export function initPanorama(position: GeoPoint) {
  new google.maps.StreetViewPanorama(
    document.getElementById("panorama") as HTMLElement,
    {
      position: {
        lat: position.latitude,
        lng: position.longitude,
      },
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  )

  resetPanorama(false)
}

export function resetPanorama(hide = false) {
  const panoramaElement = document.querySelector(
    "[data-reset-panorama]"
  ) as HTMLDivElement

  if (hide) {
    panoramaElement.style.display = "none"
    return
  }
  panoramaElement.style.display = "block"
}

export function Map() {
  return `<div id="map"></div>`
}
