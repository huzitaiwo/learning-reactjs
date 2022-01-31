import { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
  const { id } = useParams()
  const url = 'http://localhost:4000/articles/' + id
  const {data: article, isPending, error } = useFetch(url)

  useEffect(() => {
    if(error) {
      // redirect
      history.push('/')
    }
  }, [error])


  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}