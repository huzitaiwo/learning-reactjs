import { useState } from 'react'
import './EventForm.css'

export default function EventForm() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')


  return (
    <form className="event-form">
      <label>
        <span>Event Title:</span>
        <input 
          type="text" 
          onChange={e => setTitle(e.target.value)}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input 
          type="date" 
          onChange={e => setDate(e.target.value)} />
      </label>
      <button>Submit</button>
    </form> 
  )
}
