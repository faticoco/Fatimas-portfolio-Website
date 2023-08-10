import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/navbar';
import Hero from './components/heroSection';
import Skills from './components/skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { BrowserRouter as Router } from 'react-router-dom';

const BodyContainer = styled.div`
  background-color: ${(props) => props.theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
const Wrapper=
styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%,30% 100%, 0 100%);
`;

const Wrapper1=
styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 100%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
          <Navbar />
              <BodyContainer>
                  <Hero />
                  <Wrapper>
                      <Skills />
                    
                  </Wrapper>
                
                
                  <Wrapper1>
                  <Experience/>
                    <Projects />
                  </Wrapper1>
                  <Education />
                  
              
              </BodyContainer>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
