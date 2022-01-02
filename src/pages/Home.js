import { useFetch } from '../hooks/useFetch';

// styles
import './Home.css'

export default function Home() {
  const { data: articles, isPending, error} = useFetch('http://localhost:4000/articles')
  

  return (
    <div className='home'>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {articles && articles.map(article => (
        <div key={article.id} className='card'>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
        </div>
      ))}
    </div>
  )
}
