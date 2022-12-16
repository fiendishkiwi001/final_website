import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text } from '@nextui-org/react'

function App() {
  return (


    <div className="App">
      <div className='page'>
        <div className='aboutMe'>
          <div className='kiwi'>
            <img src={require('./kiwi.PNG')}></img>
          </div>
          <div className='biography'>
            <div className='hi'>
            <Text size="$6xl">Hi, I'm&nbsp;</Text><Text size="$6xl" color='#8EE53F'>________________</Text>
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

      <div className='page'>
        <Text css={{margin: 0}} className='tocTitle' size='$lg' color='#8EE53F'>Navigate site using project preview links below</Text>
        <div className='gridWrapper'>

          <a href='#personas' className='tocItem'>
            <video width="100%" height="100%" autoPlay muted loop>
              <source src={require('./croppedPersonas.mp4')} type="video/mp4"></source>
            </video>
          </a>
          <a href='#redesign' className='tocItem'>
            <video width="100%" height="100%" autoPlay muted loop>
              <source src={require('./croppedRedesign.mp4')} type="video/mp4"></source>
            </video>
          </a>
          <a href='#iterative' className='tocItem'>
            <video width="100%" height="100%" autoPlay muted loop>
              <source src={require('./croppedPivo.mp4')} type="video/mp4"></source>
            </video>
          </a>
          
          <a href='#development' className='tocItem'>
            <video width="100%" height="100%" autoPlay muted loop>
              <source src={require('./croppedDevelopment.mp4')} type="video/mp4"></source>
            </video>
          </a>
        </div>
      </div>
      

      <div className='projectPage' id='personas'>
        <div className='projectTitle'>
          <Text size="$6xl">Personas & Storyboarding</Text>
        </div>
        <div className='projectContent'>
          <div className='halfPage'>
            <div>
              <img className='personaImages' src={require('./remoteSS.png')}></img>
              <img className='personaImages' src={require('./empathyMap.png')}></img>
            </div>
          </div>
          <div className='halfPage'>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Objectives</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Create a new interface for any public interface (a Roku TV remote in this case)
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Interview potential users to construct corresponding personas and empathy maps
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Consider these personas and create a storyboard for the chosen product in order to better understand the complete user experience
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Decisions</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Create a new interface for any public interface (a Roku TV remote in this case)
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Interview potential users to construct corresponding personas and empathy maps.
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Consider these personas and create a storyboard for the chosen product in order to better understand the complete user experience.
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Reflections</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Link to Page</Text>
            <Text size="$lg">
              <a href='https://fiendishkiwi001.github.io/storyboard/' target="_blank" rel="noreferrer">fiendishkiwi001.github.io/storyboard</a>
            </Text>
          </div>
        </div>
      </div>

      <div className='projectPage' id='redesign'>
        <div className='projectTitle'>
          <Text size="$6xl">Responsive Redesign</Text>
        </div>
        <div className='projectContent'>
          <div className='halfPage'>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Objectives</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Decisions</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Reflections</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Link to Page</Text>
            <Text size="$lg">Heroku deployment unavailable :(</Text>
          </div>
          <div className='halfPage'>
            
          </div>
        </div>
      </div>

      <div className='projectPage' id='iterative'>
        <div className='projectTitle'>
          <Text size="$6xl">Iterative Design</Text>
        </div>
        <div className='projectContent'>
          <div className='halfPage'>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Objectives</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Decisions</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Reflections</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Link to Page</Text>
            <Text size="$lg">Figma is not anonymous :(</Text>
          </div>
          <div className='halfPage'>
            
          </div>
        </div>
      </div>

      <div className='projectPage' id='development'>
        <div className='projectTitle'>
          <Text size="$6xl">Development</Text>
        </div>
        <div className='projectContent'>
          <div className='halfPage'>
            
          </div>
          <div className='halfPage'>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Objectives</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Decisions</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Reflections</Text>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Link to Page</Text>
            <Text size="$lg">
              <a href='https://fiendishkiwi001.github.io/development/' target="_blank" rel="noreferrer">fiendishkiwi001.github.io/development</a>
            </Text>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
