import "../assets/css/Bucket.css"

import { IBucket } from "../types/IBucket"

export function Bucket(datum: IBucket) {
  return `
    <div class="bucket">
      <h3>${datum.title}</h3>
      <div class="img-container">
        <img src="${datum.imageUrl}" alt="${datum.title}" />
      </div>
      <div class="btns" data-id="${datum.id}">
        <button class="start ${datum.done ? "done" : ""}">
          ${datum.done ? "Déja été ! Refaire" : "Aller"}
        </button>
        <hr />
        <br />
        <div>
          <button class="visit" id="${datum.id}">Visiter</button>
          <button class="infos">
            <a href="${datum.link}" target="_blank">Plus d'infos</a>
          </button>
        </div>
      </div>
    </div>
  `
}
