
// styles
import { useLocation } from 'react-router-dom'
import './Search.css'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:4000/recipes?q=' + query;

  return (
    <div>Search</div>
  )
}