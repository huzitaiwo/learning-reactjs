import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:4000/recipes' + id

  const { data:recipe, isPending, error } = useFetch(url)

  return (
    <div>
      Recipe - {id}
    </div>
  )
}