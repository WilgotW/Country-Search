import React from 'react'
import RegionSelector from './RegionSelector'
import SearchBar from './SearchBar'


function MiddleBar() {
  return (
    <div className='middle-bar'>
        <SearchBar></SearchBar>
        <RegionSelector></RegionSelector>
    </div>
  )
}

export default MiddleBar