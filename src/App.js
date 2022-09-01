import './App.css';
import CountryList from './components/CountryList';
import MiddleBar from './components/MiddleBar';
import TopBar from './components/TopBar';

function App() {
  
  return (
    <div className="App">
      <TopBar></TopBar>
      <MiddleBar></MiddleBar>
      <CountryList></CountryList>
    </div>
  );
}

export default App;
