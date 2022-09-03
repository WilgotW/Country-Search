import React from 'react';
import './App.css';
import { useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';

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

  const mainDark = "hsl(207, 26%, 17%)";
  const secondaryDark = "hsl(209, 23%, 22%)";
  const textDarkMode = "hsl(0, 0%, 100%)";

  const mainWhite = "hsl(0, 0%, 91%)";
  const secondaryWhite = "hsl(0, 0%, 96%)";
  const textWhiteMode = "hsl(0, 0%, 0%)";

  const [toggleDarkMain, setToggleDarkMain] = useState(true);
  const [toggleDarkSecondary, setToggleDarkSecondary] = useState(true);
  const [toggleDarkText, setToggleDarkText] = useState(true);

  const [backGround, setBackground] = useState("");

  const switchMode = () =>{
    (toggleDarkMain == true) ?  setBackground(mainWhite) : setBackground(mainDark);

    (toggleDarkMain == true) ? setToggleDarkMain(false) : setToggleDarkMain(true);
    (toggleDarkSecondary == true) ? setToggleDarkSecondary(false) : setToggleDarkSecondary(true);
    (toggleDarkText == true) ? setToggleDarkText(false) : setToggleDarkText(true);
  }
 
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
  
  useEffect(() => {
    console.log(allCountries)
    console.log(countries);
  }, [allCountries], [countries]);

  useEffect(() => {
    searchForCountry() 
  }, [continentFilter])

  const searchForCountry = () => {
    
    let all = allCountries;
    setCountries(all);
    console.log("Searching for: " + search + " in " + continentFilter);
  
    let newArr = [...all]
    //test
    let filteredCountries = newArr.filter(country => { 
      if(continentFilter !== ""){
        console.log(country.region[0])
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
      <Helmet>
        <style>{"body { background-color: " + backGround + "; }"}</style>
      </Helmet>
     
      {/* Top part */}
      <div className='top-bar' style={{
        background: toggleDarkSecondary ? secondaryDark : secondaryWhite
      }}>
        <div className='title' style={{
          color: toggleDarkText ? textDarkMode : textWhiteMode
        }}>Where in the world?</div>
        <div onClick={switchMode}>
          <ThemeSwitch  toggleDarkTex={toggleDarkText} textDarkMode={textDarkMode} textWhiteMode={textWhiteMode}></ThemeSwitch>
        </div>
      </div>

      {/* middle part */}
      <div className='middle-bar'>
        <div className='search-bar' style={{
          color: toggleDarkText ? textDarkMode : textWhiteMode,
          background: toggleDarkSecondary ? secondaryDark : secondaryWhite
        }}>
          <AiOutlineSearch className='search-icon' onClick={searchForCountry} style={{
            color: toggleDarkText ? textDarkMode : textWhiteMode
          }}></AiOutlineSearch>
          <input 
            onChange={changeSearch}
            value={search}
            type="text" 
            className='input-bar' 
            placeholder='Search For a country...' 
            style={{
              color: toggleDarkText ? textDarkMode : textWhiteMode
            }}
          />
          <p>({countries.length})</p>
        </div>
        
        <div onClick={dropDownToggle}>
          <RegionSelector text={regionSelectorText} toggleDarkSec={toggleDarkSecondary} toggleDarkTex={toggleDarkText} secDark={secondaryDark} textDarkMode={textDarkMode} secWhite={secondaryWhite} textWhiteMode={textWhiteMode}></RegionSelector>
        </div>
          
        
      </div>
      <div className='positioning-right'>
        <div className='options' style={{
          opacity: showDropDown ? '100' : '0',
          background: toggleDarkSecondary ? secondaryDark : secondaryWhite,
          color: toggleDarkText ? textDarkMode : textWhiteMode
        }}>
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
            selectContinent("Americas")}}><p className='con'>Americas</p></div>
          <div className='continent'onClick={() => {dropDownToggle() 
            selectContinent("Oceania")}}><p className='con'>Oceania</p></div>
        </div>
      </div>
      
      {/* country list */}
      <div className='center'>
        <div className='country-list'>
            <Item countries={countries} toggleDarkSec={toggleDarkSecondary} toggleDarkTex={toggleDarkText} secDark={secondaryDark} textDarkMode={textDarkMode} secWhite={secondaryWhite} textWhiteMode={textWhiteMode}></Item>
        </div>
    </div>
      
    </div>
  );
}

export default App;
