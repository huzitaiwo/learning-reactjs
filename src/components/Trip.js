

export default function Trip() {

  fetch('http://localhost:8000/trips')
    .then(res => res.json())
    .then(json => console.log(json))
  return (
    <div>Trip</div>
  )
}
