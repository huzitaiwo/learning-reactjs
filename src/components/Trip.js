import { useEffect, useState } from "react"


export default function Trip() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/trips')
      .then(res => res.json())
      .then(json => console.log(json))
  }, [])

  


  return (
    <div className="trip-list">
      <h2>Trip List</h2>

      <ul>
        {trips.map(trip => {
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        })}
      </ul>

    </div>
  )
}
