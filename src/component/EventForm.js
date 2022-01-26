import { useRef, useState } from 'react'
import './EventForm.css'

export default function EventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState()
  const titleRef = useRef()
  const dateRef = useRef()

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(titleRef.current.value && dateRef.current.value) {
      const event = {
        title: title,
        date: date,
        id: Math.floor(Math.random() * 10000)
      }

      addEvent(event)
      resetForm()

    } else {
      console.log('invalid inputs')
    }

  }


  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input 
          type="text" 
          onChange={e => setTitle(e.target.value)}
          value={title}
          ref={titleRef}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input 
          type="date" 
          onChange={e => setDate(e.target.value)} 
          value={date}
          ref={dateRef}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={}>
          <option value="manchester">Manschester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
    </form> 
  )
}
