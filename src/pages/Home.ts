import { Buckets } from "../components/Buckets"
import { Map } from "../components/Map"
import { Panorama } from "../components/Panorama"

export function Home() {
  return `
    <div class="container-fluid">
      <div class="row">
        <div id="dream-buckets">
          ${Buckets()}
        </div>
        <div id="google-map">
          ${Map()}
          ${Panorama()}
          <button class="reset-map" data-reset-map>Réinitialiser</button>
        </div>
      </div>
    </div>
  `
}
