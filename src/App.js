import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';

import {AiOutlineSearch} from 'react-icons/ai'
import ThemeSwitch from './components/ThemeSwitch'
import Item from './components/Item'
import RegionSelector from './components/RegionSelector'

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [continentFilter, setContinentFilter] = useState("");
  const [regionSelectorText, setRegionSelectorText] = useState("");
 
  const dropDownToggle = () => {
    setShowDropDown(current => !current);
  }

  const changeSearch = e => { 
    setSearch(e.target.value)
  }

  const getData = async () => {
    let res = await fetch('https://restcountries.com/v3.1/all')
    setAllCountries(await res.json());
  }

  useEffect(() => {
    getData();
  }, []);
  
  // useEffect(() => {
  //   console.log(allCountries)
  //   console.log(countries);
  // }, [allCountries], [countries]);

  useEffect(() => {
    searchForCountry() 
  }, [continentFilter])

  const searchForCountry = () => {
    let all = allCountries;
    setCountries(all);
    console.log("Searching for: " + search + " in " + continentFilter);
  
    let newArr = [...all]
    if(continentFilter != ""){
      
    }
    let filteredCountries = newArr.filter(country => { 
      if(continentFilter !== ""){
        return country.name.common.includes(search) && country.region == continentFilter; 
      }else{
        return country.name.common.includes(search)
      }
    })
    
    setCountries(filteredCountries);
  }
  
  window.addEventListener('keydown', e => {
    if(e.keyCode == 13) {
      searchForCountry();
    }
  })
  
  const selectContinent = continent => {
    setRegionSelectorText(continent);
    setContinentFilter(continent); 
    
  }
  return (
    <div className="App">
      {/* Top part */}
      <div className='top-bar'>
        <div className='title'>Where in the world?</div>
        <ThemeSwitch></ThemeSwitch>
      </div>

      {/* middle part */}
      <div className='middle-bar'>
        <div className='search-bar'>
          <AiOutlineSearch className='search-icon' onClick={searchForCountry}></AiOutlineSearch>
          <input 
            onChange={changeSearch}
            value={search}
            type="text" 
            className='input-bar' 
            placeholder='Search For a country...' 
          />
        </div>
        
        <div onClick={dropDownToggle}>
          <RegionSelector text={regionSelectorText}></RegionSelector>
        </div>
          
        
      </div>
      <div className='positioning-right'>
        <div className='options' style={{opacity: showDropDown ? '100' : '0'}}>
          <div className='continent'onClick={() => {
            dropDownToggle()
            selectContinent("")}}><p className='con'>All</p></div>
          <div className='continent'onClick={() => {dropDownToggle() 
            selectContinent("Europe")}}><p className='con'>Europe</p></div>
          <div className='continent'onClick={() => {dropDownToggle() 
            selectContinent("Asia")}}><p className='con'>Asia</p></div>
          <div className='continent'onClick={() => {dropDownToggle() 
            selectContinent("Africa")}}><p className='con'>Africa</p></div>
          <div className='continent'onClick={() => {dropDownToggle()
            selectContinent("North America")}}><p className='con'>North America</p></div>
          <div className='continent'onClick={() => {dropDownToggle() 
            selectContinent("South America")}}><p className='con'>South America</p></div>
          <div className='continent'onClick={() => {dropDownToggle() 
            selectContinent("Oceania")}}><p className='con'>Oceania</p></div>
        </div>
      </div>
      
      {/* country list */}
      <div className='center'>
        <div className='country-list'>
            <Item countries={countries}></Item>
        </div>
    </div>
      
    </div>
  );
}

export default App;
