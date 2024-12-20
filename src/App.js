import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import SocialMedia from './components/SocialMedia';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navigation />
        <main>
          <Profile />
          <Skills />
          <Education />
          <Experience />
          <SocialMedia/>
        </main>
      </div>
    </Router>
  );
}

export default App;