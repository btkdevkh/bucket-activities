// App

import "./assets/css/global.css"
import { Navbar } from "./components/Navbar"
import { initMap } from "./components/Map"
import { Login } from "./pages/admin/Login"
import { loginUser } from "./helpers/admin/loginUser"
import { Admin } from "./pages/admin/Admin"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/config"
import { logoutUser } from "./helpers/admin/logoutUser"
import { Home } from "./pages/Home"
import { addBucket } from "./helpers/admin/addBucket"
import { bucketList } from "./components/Buckets"

// init map
declare global {
  interface Window {
    initMap: () => void
  }
}

window.initMap = initMap

const app = document.querySelector<HTMLDivElement>("#app")!

if (location.pathname === "/") {
  app.innerHTML = `
    ${Navbar(false)}
    ${Home()}
  `
  bucketList()
}

if (location.pathname === "/login") {
  app.innerHTML = `
    ${Navbar(false)}
    ${Login()}
  `
  loginUser()
}

onAuthStateChanged(auth, user => {
  if (user) {
    // console.log("USER", user)

    if (location.pathname === "/admin") {
      app.innerHTML = `
        ${Navbar(true)}
        ${Admin()}
      `
      logoutUser()
      addBucket()
    }
  }

  if (user && location.pathname === "/login") {
    window.location.replace("/")
  }

  if (user === null && location.pathname === "/admin") {
    window.location.replace("/")
  }
})
