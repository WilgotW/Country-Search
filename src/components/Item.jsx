import React from 'react'

function Item({countries}) {
  // countries.map((country, index) =>
  //   let flagName = country.;
  // );
  
  // let flag = "https://flagcdn.com/w320/" + flagName + ".png"

  return countries.map((country, index) => (
    <div className='item' key={index}>
        <div className='country-image'>
          <img src={country.flags.png} className="image" alt="" />
        </div>
        <h1 className='country-name'>{country.name.common}</h1>
        <p className='country-description'>Description</p>
    </div>
  ));
}

export default Item