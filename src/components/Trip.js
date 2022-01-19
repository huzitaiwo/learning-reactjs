import { useEffect, useState } from "react"


export default function Trip() {
  const [trips, setTrips] = useState([])

  useEffect()

  fetch('http://localhost:8000/trips')
    .then(res => res.json())
    .then(json => console.log(json))


  return (
    <h1>Trip List</h1>
  )
}
