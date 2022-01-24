import { useState } from 'react'

// components
import Modal from './component/Modal'

// styles
import './App.css'



export default function App() {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false)
  }


  return (
    <div className="app">
      <h1 className="title">App Component</h1>
      
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam quisquam doloribus beatae minima. Voluptatem atque ipsam accusantium excepturi, vel laudantium tempore temporibus unde molestiae natus.</p>
      </Modal>}
      <div>
        <button onClick={() => setShowModal(true)}>show modal</button>
      </div>
    </div>
  )
}
