import { useRef, useState } from 'react'

// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState('')
  const ingredientInput = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const recipe = {title, method, cookingTime}

    console.log(recipe)
  }

  const handleAdd = e => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
  }

  // const resetForm = () => {
  //   setTitle('')
  //   setMethod('')
  //   setCookingTime('')
  // }

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
          />
          <button className='btn' onClick={handleAdd}>add</button>
        </div>
      </label>

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