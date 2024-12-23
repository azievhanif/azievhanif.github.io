import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navigation />
        <main>
          <Profile />
          <AboutMe />
          <Skills />
          <Education />
          <Experience />
          <SocialMedia/>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;