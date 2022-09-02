import React from 'react'
import { BsArrowUpLeft, BsFillCaretDownFill } from "react-icons/bs";

function RegionSelector({text, toggleDarkSec, toggleDarkTex, secDark, textDarkMode, secWhite, textWhiteMode}) {
  return (
    <div className='region-selector' style={{
      background: toggleDarkSec ? secDark : secWhite
    }}>
      <div className='region' style={{
        color: toggleDarkTex ? textDarkMode : textWhiteMode
      }}>
        Filter By Region: {text}
      </div>
      <BsFillCaretDownFill className='arrow' style={{
        color: toggleDarkTex ? textDarkMode : textWhiteMode
      }}/>
    </div>
  )
}

export default RegionSelector