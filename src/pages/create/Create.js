import { useState } from 'react'

// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const recipe = {title, method, cookingTime}

    console.log(recipe)
  }

  // const resetForm = () => {
  //   setTitle('')
  //   setMethod('')
  //   setCookingTime('')
  // }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>title:</span>
        <input 
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      </label>
      <label>
        <span>cooking time:</span>
        <input 
        type="number"
        onChange={e => setCookingTime(e.target.value)}
        value={cookingTime}
      />
      </label>
      <label>
        <span>method:</span>
        <input 
        type="text"
        onChange={e => setMethod(e.target.value)}
        value={method}
      />
      </label>
      <button className='btn'>submit</button>
    </form>
  )
}