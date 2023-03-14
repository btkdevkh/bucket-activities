const getData = async () => {
  const res = await fetch("../data.json")
  const data = await res.json()

  return data
}

export default getData
