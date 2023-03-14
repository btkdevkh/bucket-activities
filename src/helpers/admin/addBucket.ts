import { IBucket } from "../../types/IBucket"
import {
  colBuckets,
  getDownloadURL,
  ref,
  storage,
  uploadBytes,
} from "../../firebase/config"
import { addDoc, GeoPoint } from "firebase/firestore"

export function addBucket() {
  const adminForm = document.querySelector("[data-admin]") as HTMLFormElement
  adminForm?.addEventListener("submit", async e => {
    e.preventDefault()

    const title = adminForm.activity.value
    const imagePath = adminForm.img.files[0].name
    const done = adminForm.done.checked
    const link = adminForm.link.value
    const latitude = adminForm.lat.value
    const longitude = adminForm.lng.value
    const coordinates = new GeoPoint(latitude, longitude)

    if (
      !title ||
      !imagePath ||
      !link ||
      !coordinates.latitude ||
      !coordinates.longitude
    ) {
      return
    }

    // create a reference to 'images/...'
    const imagesRef = ref(storage, `images/${imagePath}`)

    // upload file
    await uploadBytes(imagesRef, adminForm.img.files[0])
    // download file url
    const fileUrl = await getDownloadURL(imagesRef)

    const newBucket: IBucket = {
      title,
      imagePath: imagesRef.fullPath,
      imageUrl: fileUrl,
      done,
      link,
      coordinates,
    }

    await addDoc(colBuckets, newBucket)
    window.location.replace("/")
  })
}
