import './App.css';
import React from 'react'
import helloLight from '../src/oeye.png';
import helloDark from '../src/oeye.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Skills, Experience, Contact, Footer, Team } from './components'
import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import './components/styles.css'
import { MagicalButton, Mdark } from './stylee';




function App() {


      
 
   

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
  <BrowserRouter>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
    <Switch>
        <Route exact path="/" >
          <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home"  className="navname"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="https://gcurvature.vercel.app/" className="link">{darkMode?  <MagicalButton>  Home </MagicalButton> : <Mdark>Home</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/about" className="link">{darkMode? <MagicalButton>About Us</MagicalButton> : <Mdark>About</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/team" className="link">{darkMode? <MagicalButton>Team</MagicalButton> : <Mdark>Team</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/mmo2020" className="link">{darkMode? <MagicalButton>Contests</MagicalButton> : <Mdark>Contests</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/contact" className="link">{darkMode? <MagicalButton>Contact</MagicalButton> : <Mdark>Contact</Mdark> }</Nav.Link>
                </Nav>
{darkMode?  <MagicalButton onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faCompass} spin/>
                </MagicalButton> : <Mdark onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faAdjust} spin/>
                </Mdark>}
            </Navbar.Collapse>
          </Navbar>
          <div id="home">
          <Home darkMode={darkMode} />
          </div>
          <Footer />
          </Route>
 <Route path="/sponsors">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                 <Nav.Link href="https://gcurvature.vercel.app/" className="link">{darkMode?  <MagicalButton>  Home </MagicalButton> : <Mdark>Home</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/about" className="link">{darkMode? <MagicalButton>About Us</MagicalButton> : <Mdark>About</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/team" className="link">{darkMode? <MagicalButton>Team</MagicalButton> : <Mdark>Team</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/mmo2020" className="link">{darkMode? <MagicalButton>Contests</MagicalButton> : <Mdark>Contests</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/contact" className="link">{darkMode? <MagicalButton>Contact</MagicalButton> : <Mdark>Contact</Mdark> }</Nav.Link>
                </Nav>
                {darkMode?  <MagicalButton onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faCompass} spin/>
                </MagicalButton> : <Mdark onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faAdjust} spin/>
                </Mdark>}
            </Navbar.Collapse>
          </Navbar>
 <div id="experience">
          <Experience darkMode={darkMode} />
      </div>
 <Footer />
</Route>
    
          <Route path="/about">
             <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                   <Nav.Link href="https://gcurvature.vercel.app/" className="link">{darkMode?  <MagicalButton>  Home </MagicalButton> : <Mdark>Home</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/about" className="link">{darkMode? <MagicalButton>About Us</MagicalButton> : <Mdark>About</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/team" className="link">{darkMode? <MagicalButton>Team</MagicalButton> : <Mdark>Team</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/mmo2020" className="link">{darkMode? <MagicalButton>Contests</MagicalButton> : <Mdark>Contests</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/contact" className="link">{darkMode? <MagicalButton>Contact</MagicalButton> : <Mdark>Contact</Mdark> }</Nav.Link>
                </Nav>
               {darkMode?  <MagicalButton onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faCompass} spin/>
                </MagicalButton> : <Mdark onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faAdjust} spin/>
                </Mdark>}
            </Navbar.Collapse>
          </Navbar>
            <div id="about">
          <About darkMode={darkMode} />
          </div>
 <Footer />
</Route>
<Route path="/mmo2020">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "light" : "light"}>
            <Navbar.Brand href="#home" className="navname"> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://gcurvature.vercel.app/" className="link">{darkMode?  <MagicalButton>  Home </MagicalButton> : <Mdark>Home</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/about" className="link">{darkMode? <MagicalButton>About</MagicalButton> : <Mdark>About Us</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/team" className="link">{darkMode? <MagicalButton>Team</MagicalButton> : <Mdark>Team</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/mmo2020" className="link">{darkMode? <MagicalButton>Contests</MagicalButton> : <Mdark>Contests</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/contact" className="link">{darkMode? <MagicalButton>Contact</MagicalButton> : <Mdark>Contact</Mdark> }</Nav.Link>
                </Nav>
               {darkMode?  <MagicalButton onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faCompass} spin/>
                </MagicalButton> : <Mdark onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faAdjust} spin/>
                </Mdark>}
            </Navbar.Collapse>
          </Navbar>
 <div id="skills">
          <Skills darkMode={darkMode} />
      </div>
 <Footer />
</Route>
<Route path="/team">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://gcurvature.vercel.app/" className="link">{darkMode?  <MagicalButton>  Home </MagicalButton> : <Mdark>Home</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/about" className="link">{darkMode? <MagicalButton>About</MagicalButton> : <Mdark>About Us</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/team" className="link">{darkMode? <MagicalButton>Team</MagicalButton> : <Mdark>Team</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/mmo2020" className="link">{darkMode? <MagicalButton>Contests</MagicalButton> : <Mdark>Contests</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/contact" className="link">{darkMode? <MagicalButton>Contact</MagicalButton> : <Mdark>Contact</Mdark> }</Nav.Link>
                </Nav>
               {darkMode?  <MagicalButton onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faCompass} spin/>
                </MagicalButton> : <Mdark onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faAdjust} spin/>
                </Mdark>}
            </Navbar.Collapse>
          </Navbar>
 <div id="team">
          <Team darkMode={darkMode} />
      </div>
 <Footer />
</Route>
<Route path="/contact">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="https://gcurvature.vercel.app/" className="link">{darkMode?  <MagicalButton>  Home </MagicalButton> : <Mdark>Home</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/about" className="link">{darkMode? <MagicalButton>About</MagicalButton> : <Mdark>About Us</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/team" className="link">{darkMode? <MagicalButton>Team</MagicalButton> : <Mdark>Team</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/mmo2020" className="link">{darkMode? <MagicalButton>Contests</MagicalButton> : <Mdark>Contests</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/contact" className="link">{darkMode? <MagicalButton>Contact</MagicalButton> : <Mdark>Contact</Mdark> }</Nav.Link>
                </Nav>
                {darkMode?  <MagicalButton onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faCompass} spin/>
                </MagicalButton> : <Mdark onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faAdjust} spin/>
                </Mdark>}
            </Navbar.Collapse>
          </Navbar>
 <div id="contact">
          <Contact darkMode={darkMode} />
      </div>
 <Footer />
</Route>
<Route path="/anonymous">
    <Navbar expand="lg" className="navbar" data-theme={darkMode ? "dark" : "light"}>
            <Navbar.Brand href="#home" className="navname">  <img src={darkMode ? helloDark : helloLight} alt="hello" className="hello-img" width="150" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="https://gcurvature.vercel.app/" className="link">{darkMode?  <MagicalButton>  Home </MagicalButton> : <Mdark>Home</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/about" className="link">{darkMode? <MagicalButton>About</MagicalButton> : <Mdark>About Us</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/team" className="link">{darkMode? <MagicalButton>Team</MagicalButton> : <Mdark>Team</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/mmo2020" className="link">{darkMode? <MagicalButton>Contests</MagicalButton> : <Mdark>Contests</Mdark> }</Nav.Link>
                    <Nav.Link href="https://gcurvature.vercel.app/contact" className="link">{darkMode? <MagicalButton>Contact</MagicalButton> : <Mdark>Contact</Mdark> }</Nav.Link>
                      <Nav.Link href="https://gcurvature.vercel.app/sponsors" className="link"><Mdark>Sponsors and Prizes</Mdark></Nav.Link>
                    
                </Nav>
                {darkMode?  <MagicalButton onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faCompass} spin/>
                </MagicalButton> : <Mdark onClick={toggleDarkMode}>
                    {darkMode ? "Switch Alien Mode" : "Switch Human Mode"} <FontAwesomeIcon className="light" size="lg" icon={faAdjust} spin/>
                </Mdark>}
            </Navbar.Collapse>
          </Navbar>
 <div id="about">
          <About darkMode={darkMode} />
      </div>
 <Footer />
</Route>



















        </Switch>
      </div>
</BrowserRouter>
  
  );
}

export default App;

