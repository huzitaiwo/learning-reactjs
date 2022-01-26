import ReactDom from 'react-dom'

// styles
import './Modal.css'

export default function Modal({ children, handleClose, isSalesModal }) {
  return ReactDom.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "3px solid",
        borderColor: isSalesModal ? "#333" : "#141414",
        textAlign: "left"
        }}>
        {children}
        <button 
          onClick={handleClose} 
          className={isSalesModal ? "sales-btn" : ""}>close</button>
      </div>
    </div>
  ), document.body)
}
