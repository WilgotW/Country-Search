import React from 'react'

function Item({countries, toggleDarkSec, toggleDarkTex, secDark, textDarkMode, secWhite, textWhiteMode}) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return countries.map((country, index) => (
    <div className='item' key={index} style={{
      background: toggleDarkSec ? secDark : secWhite
    }}>
        <div className='country-image'>
          <img src={country.flags.png} className="image" alt="" />
        </div>
        <div style={{
          color: toggleDarkTex ? textDarkMode : textWhiteMode
        }}>
          <h1 className='country-name'>{country.name.common}</h1>
          <p className='country-description'>
            Population: {numberWithCommas(country.population)} <br />
            Capital: {country.capital} <br />
            Area: {numberWithCommas(country.area)} km²<br /> 
            <a href={country.maps.googleMaps} className="google-link">location</a>
            
          </p>
        </div>
        
    </div>
  ));
}

export default Item