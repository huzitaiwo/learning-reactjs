import React, { useState } from 'react'

// styles
import './Searchbar.css'


export default function Searchbar() {
  const [term, setTerm] = useState('')
  
  return (
    <div className='searchbar'>
      <form>
        <label htmlFor="search">Search:</label>
        <input 
          type="text" 
          id='search' 
          onChange={} 
        />
      </form>
    </div>
  )
}
