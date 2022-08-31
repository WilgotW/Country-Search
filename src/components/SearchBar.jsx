import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"

function SearchBar() {
  return (
    <div className='search-bar'>
        <AiOutlineSearch className='search-icon'></AiOutlineSearch>
        <input type="text" className='input-bar' placeholder='Search For a country...'/>
    </div>
  )
}

export default SearchBar