import { auth } from "../../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

export function loginUser() {
  const form = document.querySelector("[data-form]") as HTMLFormElement
  form?.addEventListener("submit", async e => {
    e.preventDefault()

    const email = form.email.value
    const password = form.password.value

    if (!email || !password) return

    const userLoggedIn = await signInWithEmailAndPassword(auth, email, password)
    if (userLoggedIn.user) {
      window.history.pushState({}, "/admin", window.location.origin + "/admin")
    }

    location.reload()
  })
}
