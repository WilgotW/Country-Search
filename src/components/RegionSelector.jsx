import React from 'react'
import { BsFillCaretDownFill } from "react-icons/bs";

function RegionSelector() {
  return (
    <div className='region-selector'>
        <div className='region'>Filter By Region</div>
        <BsFillCaretDownFill className='arrow'/>
    </div>
  )
}

export default RegionSelector