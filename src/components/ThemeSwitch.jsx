import React, {useState} from 'react'
import {BsFillMoonFill} from "react-icons/bs"

function ThemeSwitch({toggleDarkTex, textDarkMode, textWhiteMode}) {
  const [themeName, setThemeName] = useState("Dark");

  const darkMode = () => {
    setThemeName("Dark");
    document.body.style = "hsl(207, 26%, 17%)";
    
  }
  const lightMode = () => {
    setThemeName("Light");
    document.body.style = "hsl(0, 0%, 100%)";
    
  }
  return (
    <div className='theme-switch' onClick={() => {
      (themeName === "Dark") ? lightMode() : darkMode(); 
      
    }} style={{
      color: toggleDarkTex ? textDarkMode : textWhiteMode
    }}>
      <BsFillMoonFill></BsFillMoonFill>
      <div className='theme'>{themeName} Mode </div>
    </div>
    
  )
}

export default ThemeSwitch