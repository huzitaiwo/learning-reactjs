import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Search.css'

// components
import RecipeList from '../../components/RecipeList'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:4000/recipes?q=' + query;
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <div className="page-title">Recipes including "{query}"</div>
      {error && <h2 className='error'>{error}</h2>}
      {isPending && <h2 className='loadig'>Loading...</h2>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}