// components
import Modal from './component/Modal'

// styles
import './App.css'


export default function App() {
  return (
    <div className="app">
      <h1 className="title">App Component</h1>
      {/* <Modal>
        <h2>10% Off Coupon Code</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      <Modal>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam quisquam doloribus beatae minima. Voluptatem atque ipsam accusantium excepturi, vel laudantium tempore temporibus unde molestiae natus.</p>
        <a href="#">Find out more...</a>
      </Modal>
    </div>
  )
}
