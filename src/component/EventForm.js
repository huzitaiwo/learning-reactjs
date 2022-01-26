import { useState } from 'react'
import './EventForm.css'

export default function EventForm({ addEvent, setShowModal }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = e => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000)
    }
    
    addEvent(event)
    resetForm()
    setShowModal(false)

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
      <button>Submit</button>
    </form> 
  )
}
