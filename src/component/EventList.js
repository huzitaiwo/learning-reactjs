import React from "react"

export default function EventList({ events, handleClick}) {
  return (
    <div className="events">
      {events.map((event, i) => (
        <React.Fragment key={event.id}>
          <h2>{i} - {event.title}</h2>
          <p>{event.location} - {event.date}</p>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}  
    </div>
  );
}
