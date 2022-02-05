import { useState } from 'react'

// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [ingredients, setIngredients] = useState('')

  return (
    <form>
      <label>
        <span>title:</span>
        <input 
        type="text"

      />
      </label>
    </form>
  )
}