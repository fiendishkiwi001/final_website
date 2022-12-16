import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text } from '@nextui-org/react'

function App() {
  return (


    <div className="App">
      <div className='page'>
        <div className='aboutMe' id="about">
          <div className='kiwi'>
            <img src={require('./kiwi.PNG')}></img>
          </div>
          <div className='biography'>
            <div className='hi'>
            <Text size="$6xl"  weight='semibold'>Hi, I'm&nbsp;</Text><Text size="$6xl" weight='semibold' color='#8EE53F'>________________</Text>
            </div>
            <div className='bullets'>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>fiendishkiwi001</Text>
              </div>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>a Brown computer science student and React developer</Text>
              </div>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>passionate about developing web applications with practical uses</Text>
              </div>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>always learning and applying new design concepts</Text>
              </div>
              <div className='hi'>
                <Text size="$4xl">•&nbsp;&nbsp;</Text><Text size="$4xl" color='#8EE53F'>excited to present my CS1300: UI/UX journey!</Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='page'>
        <Text css={{margin: 0}} className='tocTitle' size='$lg' color='#8EE53F'>Navigate site using project preview links below (hover to focus)</Text>
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
          <Text size="$6xl" weight='semibold'>Personas & Storyboarding</Text>
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
                  Create a new design for any public interface (a TV remote in this case)
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Interview potential users to construct characteristic personas and empathy maps
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
                  Ask open ended interview questions to get more genuine responses
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Portray two user personas from contrasting demographics
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Reflections</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Interview questions could include more definite, objectively answered questions regarding specific interface traits
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Product interface could specify a certain TV remote, perhaps a Roku remote
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Storyboard lacked details on exactly how the interface's specific button and pad components would be used
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Link to Page</Text>
            <Text size="$lg">
              <a href='https://fiendishkiwi001.github.io/storyboard/' target="_blank" rel="noreferrer">fiendishkiwi001.github.io/storyboard</a>
            </Text>
          </div>
        </div>
      </div>

      <div className='projectPage' id='redesign'>
        <div className='projectTitle'>
          <Text size="$6xl" weight='semibold'>Responsive Redesign</Text>
        </div>
        <div className='projectContent'>
          <div className='halfPage'>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Objectives</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Choose an existing website (Craigslist) and analyze its user interface and experience, specifically regarding usability, learnability, accessibility, and memorability
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Brainstorm a new interface that addresses these problems by mocking up low and high fidelity prototypes for three different viewports: desktop, mobile, and tablet
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Create a responsive plaintext HTML/CSS app using these prototypes, which is pictured on the right
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Decisions</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Establish a color scheme using the existing shade of purple to help visually identify significant components
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Follow minimalist approach to functionality and design
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Streamline random hierarchy into a simple, one-dimensional system that still preserves the relationships between components
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Reflections</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Prototypes not entirely consistent throughout the design process
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Could have altered original design more dramatically
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Final design was most optimized for desktop, and could have used more dynamic components
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Link to Page</Text>
            <Text size="$lg">Heroku deployment unavailable :( Refer to preview</Text>
          </div>
          <div className='halfPage'>
            <div>
              <img className='personaImages' src={require('./craigslistPhoneSS.PNG')}></img>
              <img className='personaImages' src={require('./finalRedesignPhone - Copy.jpg')}></img>
            </div>
          </div>
        </div>
      </div>

      <div className='projectPage' id='iterative'>
        <div className='projectTitle'>
          <Text size="$6xl" weight='semibold'>Iterative Design</Text>
        </div>
        <div className='projectContent'>
          <div className='halfPage'>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Objectives</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Design an interactive app for an emerging startup based on their mission and concept, without looking at their existing websites/products
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Iteratively sketch, lo-fi prototype, and hi-fi prototype with input from three other group members
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Test final design prototype with three users and contact the startup to gauge design's effectiveness
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Decisions</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Selected a new Africa-based finance platform for its focused efforts on supporting a specific group, truckers and other supply chain workers
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Implemented a dashboard linked to pages hierarchy, with interconnected links and a user centered system
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Reflections</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Users experienced confusion when trying to navigate account details and balance, possibly due multiple buttons linking to the same page
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Certain pages, specifically for sending and receiving payment, could display data and function buttons more dynamically
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Link to Page</Text>

            <Text size="$lg">
              <a href='https://www.figma.com/proto/RyLm0d33U3S0sbBPwj6IqA/Pivo-Design?node-id=9%3A272&scaling=contain&page-id=0%3A1&starting-point-node-id=9%3A272&hide-ui=1' target="_blank" rel="noreferrer">Figma prototype</a>
            </Text>
          </div>
          <div className='halfPage'>
            <div className='pivoImages'>
              <img className='pivoImage' src={require('./pivoLofi.png')}></img>
              <img className='pivoImage' src={require('./pivoFinal.PNG')}></img>
            </div>
          </div>
        </div>
      </div>

      <div className='projectPage' id='development'>
        <div className='projectTitle'>
          <Text size="$6xl" weight='semibold'>Development</Text>
        </div>
        <div className='projectContent'>
          <div className='halfPage'>
            <div className='developmentImage'>
              <img src={require('./developmentSS.PNG')}></img>
            </div>
            
          </div>
          <div className='halfPage'>
            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Objectives</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Create a themed react app that effectively uses state variables for interactive functionality
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Specifically, the app should display 12 items, which should support 2 filters, 1 sorting feature, and a list aggregator
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Decisions</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Boba bias made me select a Kung Fu Tea bubble tea menu
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Consistent styling across the title, headers, filters, and item cards
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Keep all states as global variables, which improves filtering efficiency on component properties
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Reflections</Text>

            <div className='projectBullets'>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Cart items could be formatted more descriptively
                </Text>
              </div>
              <div className='projectBulletItem'>
                <Text size="$lg" color='#8EE53F' css={{margin: 0}}>•&nbsp;&nbsp;</Text>
                <Text size="$lg" css={{margin: 0}}>
                  Adding more total item cards would better exhibit the filtering functionality
                </Text>
              </div>
            </div>

            <Text size="$4xl" color='#8EE53F' css={{margin: 0}}>Link to Page</Text>
            <Text size="$lg">
              <a href='https://fiendishkiwi001.github.io/development/' target="_blank" rel="noreferrer">fiendishkiwi001.github.io/development</a>
            </Text>

            
          </div>
        </div>
        <div className='projectTitle'>
          <a href='#about'>
            <Text size="$2xl" color='#8EE53F'>Thanks! Click to scroll to top</Text>
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;
