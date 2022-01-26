import './EventForm.css'

export default function EventForm() {
  return (
    <form>
      <label>
        <span>Event Title:</span>
        <input type="text" />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="text" />
      </label>
      <button>Submit</button>
    </form> 
  )
}
