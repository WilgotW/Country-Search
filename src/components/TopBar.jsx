import React from 'react'
import ThemeSwitch from './ThemeSwitch'
function TopBar() {
  return (
    <div className='top-bar'>
        <div className='title'>Where in the world?</div>
        <ThemeSwitch></ThemeSwitch>
    </div>
    
  )
}

export default TopBar