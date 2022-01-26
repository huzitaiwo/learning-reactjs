import React, { useState } from 'react'

// components
import Modal from './component/Modal'
import Title from './component/Title'
import EventList from './component/EventList'
import EventForm from './component/EventForm'

// styles
import './App.css'



export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState([])
  const [events, setEvents] = useState([])

  const addEvent = event => {
    setEvents(preEvents => {
      return [...preEvents, events]
    })
  }

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Marioland"


  return (
    <div className="app">
      <Title title="Marioland Events" subtitle={subtitle} />
      
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      
      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <EventForm addEvent={addEvent} />
      </Modal>}
      <div>
        <button className="show-modal-btn" onClick={() => setShowModal(true)}>Add new event</button>
      </div>
    </div>
  )
}
