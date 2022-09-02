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
  
  useEffect(() => {
    console.log(allCountries)
    console.log(countries);
  }, [allCountries], [countries]);

  window.addEventListener('keydown', e => {
    if(e.keyCode == 13) {
      searchForCountry();
    }
  })
  
  const searchForCountry = async() => {
    let all = allCountries;
    setCountries(all);
    console.log("Searching for: " + search);
  
    let newArr = [...all]
    let filteredCountries = newArr.filter(country => country.name.common.includes(search))
    setCountries(filteredCountries);
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
        <div className='right-side'>
          <RegionSelector></RegionSelector>

          <div className='filters'>
            <div className='options'>
              <p className='continent'>Europe</p>
              <p className='continent'>Asia</p>
              <p className='continent'>Africa</p>
              <p className='continent'>North America</p>
              <p className='continent'>South America</p>
              <p className='continent'>Oceiania</p>
            </div>
          </div>
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
