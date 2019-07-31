import React from 'react';
import logo from './logo.svg';
import './App.css';
import RavintolaBox from "./Komponentit/RavintolaBox";


function App() {
  return (
    <div className="App" className='App-component'>
      <h1>ApeApi - löydä hyvää ruokaa!</h1>
      <RavintolaBox/>
    </div>
  );
}

export default App;
