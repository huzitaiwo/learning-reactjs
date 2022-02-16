import './Searchbar.css'

import React from 'react'

export default function Searchbar() {
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
