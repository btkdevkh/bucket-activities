import "../assets/css/Buckets.css"
import { getDocs, updateDoc, doc } from "firebase/firestore"
import { colBuckets } from "../firebase/config"

import { IBucket } from "../types/IBucket"
import { Bucket } from "./Bucket"
import { addMarker, initPanorama } from "./Map"

export async function bucketList() {
  const buckets = document.getElementById("buckets") as HTMLElement
  let data: any[] = []

  const res = await getDocs(colBuckets)
  res.docs.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id })
  })

  const displayData = (data: IBucket[]) => {
    buckets.innerHTML = ""
    data.sort((a: IBucket, b: IBucket) => Number(a.id) - Number(b.id))
    data.forEach((datum: IBucket) => {
      addMarker(datum)
      buckets.innerHTML += Bucket(datum)
    })
  }

  displayData(data)

  // btns
  buckets.addEventListener("click", async e => {
    const target = e.target as any
    let id: string
    let foundBucket: IBucket

    if (target.parentElement.classList.contains("btns")) {
      id = target.parentElement.dataset.id
      foundBucket = data.find((datum: IBucket) => datum.id === id) as IBucket

      foundBucket.done = !foundBucket.done
      await updateDoc(doc(colBuckets, foundBucket.id as any), {
        done: foundBucket.done,
      })

      const filteredData = data.filter((d: IBucket) => d.id !== id)
      displayData([foundBucket, ...filteredData])

      return
    }

    id = target.id
    foundBucket = data.find((datum: IBucket) => datum.id === id) as IBucket
    initPanorama(foundBucket.coordinates)
  })
}

export function Buckets() {
  return `<div class="buckets" id="buckets"></div>`
}
