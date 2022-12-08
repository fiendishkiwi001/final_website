import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text } from '@nextui-org/react'

function App() {
  return (


    <div className="App">
      <div className='gridWrapper'>
        <div className='title'>
          <Text className='titleText'>CS1300 Final Portfolio</Text>
        </div>
        <a href='#development' className='tocItem'>
          <video width="100%" height="100%" autoPlay muted loop>
            <source src={require('./croppedDevelopment.mp4')} type="video/mp4"></source>
          </video>
        </a>
        <a href='#iterative' className='tocItem'>
          <video width="100%" height="100%" autoPlay muted loop>
            <source src={require('./croppedPivo.mp4')} type="video/mp4"></source>
          </video>
        </a>
        <a href='#redesign' className='tocItem'>
          <video width="100%" height="100%" autoPlay muted loop>
            <source src={require('./croppedRedesign.mp4')} type="video/mp4"></source>
          </video>
        </a>
        <div className='tocItem'>1</div>
      </div>

      <div className='page' id='development'> development </div>

      <div className='page' id='iterative'>iterative design</div>

      <div className='page' id='redesign'>redesign</div>
      
      <div className='page'></div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
