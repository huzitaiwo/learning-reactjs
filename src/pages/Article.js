import { useParams } from "react-router-dom"

export default function Article() {
  const { id } = useParams()


  return (
    <div>
      <h2>Article page - {id}</h2>
    </div>
  )
}