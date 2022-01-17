import { useEffect, useState } from "react"

// styles
import './Trip.css'

export default function Trip() {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:8000/trips')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setTrips(json))
  }, [url])

  console.log(trips)


  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}
