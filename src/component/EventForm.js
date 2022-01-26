import { useState } from 'react'
import './EventForm.css'

export default function EventForm() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = e => {
    e.preventDefault();
  }


  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input 
          type="text" 
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input 
          type="date" 
          onChange={e => setDate(e.target.value)} 
          value={date}
        />
      </label>
      <p>date- {date}, title- {title}</p>
      <button>Submit</button>
    </form> 
  )
}
