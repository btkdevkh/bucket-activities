import "../assets/css/Navbar.css"
import globe from "../assets/img/marker.png"

export function Navbar(auth: boolean) {
  let title = "Bucket Activités"

  return `
    <header class="navbar">
      <div>
        <span>
          <img src="${globe}" />
        </span>
        <h1>${title}</h1>
      </div>

      <nav>
        <ul>
          ${
            auth
              ? `
              <li>
                <a href="/" data-logout>Logout</a>
              </li>`
              : ``
          }
          
        </ul>
      </nav>
    </header>
  `
}
