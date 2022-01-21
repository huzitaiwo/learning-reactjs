import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

// styles
import './Trip.css'

export default function Trip() {
  const [url, setUrl] = useState('http://localhost:4000/trips')
  const { data: trips, isPending, error } = useFetch(url)


  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <ul>
        {trips && trips.map(trip => (
          <li key={trip.id} style={{bacground: "url(../../public/trip.jpg);"}}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:4000/trips?loc=europe')}>European Trips</button>
        <button onClick={() => setUrl('http://localhost:4000/trips')}>All trips</button>
      </div>
    </div>
  )
}
