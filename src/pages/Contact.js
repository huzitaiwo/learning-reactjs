import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>HI {name}, Contact us here</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cumque provident. Vero vitae molestias, blanditiis, labore maxime esse dolore sunt officiis facilis sit unde dolor expedita voluptatem sapiente laboriosam quo.</p>
    </div>
  )
}
