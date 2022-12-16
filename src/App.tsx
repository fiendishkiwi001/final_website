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
          <Text>Hover over project links to preview!</Text>
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
        <a href='#personas' className='tocItem'>
          <video width="100%" height="100%" autoPlay muted loop>
            <source src={require('./croppedPersonas.mp4')} type="video/mp4"></source>
          </video>
        </a>
      </div>

      <div className='page'>
        <div className='aboutMe'>
          <div className='kiwi'>
            <img src={require('./kiwi.PNG')}></img>
          </div>
          <div className='biography'>
            <div className='hi'>
            <Text size="$7xl">Hi, I'm&nbsp;</Text><Text size="$7xl" color='#8EE53F'>________________</Text>
            </div>
            <div className='bullets'>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>fiendishkiwi001</Text>
              </div>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>a Brown computer science student</Text>
              </div>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>passionate about developing web applications with practical uses</Text>
              </div>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>always learning and applying new design concepts</Text>
              </div>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>excited to present my CS1300: UIUX journey!</Text>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className='page' id='personas'>personas</div>

      <div className='page' id='redesign'>redesign</div>

      <div className='page' id='iterative'>iterative design</div>

      <div className='page' id='development'>
        <Text>Development</Text>
      </div>
      
    </div>
  );
}

export default App;
