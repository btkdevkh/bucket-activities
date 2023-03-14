import { signOut } from "firebase/auth"
import { auth } from "../../firebase/config"

export function logoutUser() {
  const logoutBtn = document.querySelector("[data-logout]") as HTMLAnchorElement

  logoutBtn?.addEventListener("click", async e => {
    e.preventDefault()
    await signOut(auth)
    window.history.pushState({}, "/", window.location.origin + "/")
    window.location.reload()
  })
}
