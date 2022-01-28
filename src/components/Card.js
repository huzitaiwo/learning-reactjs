import './Card.css'

export default function Card({ card }) {
  const handleClick = () => {

  }

  return (
    <div className='card'>
      <div>
        <img className='front' src={card.src} alt='card front' />
        <img 
          onClick={handleClick} 
          className='back' 
          src='img/cover.png' 
          alt='card back' />
      </div>
    </div>
  )
}
