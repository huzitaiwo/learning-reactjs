import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

export default function Home() {
  const { data: recipes, isPending, error } = useFetch('http://localhost:4000/recipes')

  return (
    <div>
      {error && <h3 className='error'>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {recipes && recipes.map(recipe => (
        <h2 key={recipe.id}>{recipe.title}</h2>
      ))}
    </div>
  )
}