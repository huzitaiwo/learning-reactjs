import { useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState('')
  const ingredientInput = useRef(null)

  const { postData, data, error } = useFetch('http://localhost:4000/recipes', "POST")

  const handleSubmit = e => {
    e.preventDefault()
    
  }

  const handleAdd = e => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <form className='create' onSubmit={handleSubmit}>

      <label>
        <span>title:</span>
        <input 
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        required
      />
      </label>

      <label>
        <span>Recipe ingredients</span>
        <div className="ingredients">
          <input 
            type="text"
            onChange={e => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
          />
          <button className='btn' onClick={handleAdd}>add</button>
        </div>
      </label>
      <p>Current ingredients: {ingredients && ingredients.map(i => <em key={i}>{i}, </em>)}</p>

      <label>
        <span>method:</span>
        <textarea 
        onChange={e => setMethod(e.target.value)}
        value={method}
        required
        />
      </label>

      <label>
        <span>cooking time:</span>
        <input 
        type="number"
        onChange={e => setCookingTime(e.target.value)}
        value={cookingTime}
        required
        />
      </label>
      <button className='btn'>submit</button>
    </form>
  )
}