import ReactDom from 'react-dom'

// styles
import './Modal.css'

export default function Modal({ children, isSalesModal }) {
  return ReactDom.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "3px solid",
        borderColor: isSalesModal ? "#333" : "#141414",
        textAlign: "left"
        }}>
        {children}
      </div>
    </div>
  ), document.body)
}
