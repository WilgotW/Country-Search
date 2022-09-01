import React from 'react';
import './App.css';
import CountryList from './components/CountryList';
import MiddleBar from './components/MiddleBar';
import TopBar from './components/TopBar';

import { useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await fetch('https://restcountries.com/v3.1/all')
    setData(await response.json())
    console.log(data)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <TopBar></TopBar>
      <MiddleBar></MiddleBar>
      <CountryList></CountryList>
    </div>
  );
}

export default App;
