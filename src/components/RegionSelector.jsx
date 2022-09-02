import React from 'react'
import { BsFillCaretDownFill } from "react-icons/bs";

function RegionSelector({text}) {
  return (
    <div className='region-selector'>
      <div className='region'>
        Filter By Region: {text}
      </div>
      <BsFillCaretDownFill className='arrow'/>
    </div>
  )
}

export default RegionSelector