import ReactDom from 'react-dom'

// styles
import './Modal.css'

export default function Modal({ children, handleClose }) {
  return ReactDom.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  ), document.body)
}
