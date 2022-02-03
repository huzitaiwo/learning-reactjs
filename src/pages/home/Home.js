import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

export default function Home() {
  const { data: recipes, isPending, error } = useFetch('http://localhost:4000/recipes')

  return (
    <div>
      
    </div>
  )
}