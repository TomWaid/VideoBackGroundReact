import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import { Route } from 'react-router-dom'
 
import VideoBackground from './components/VideoBackground'
import Navbar from './components/Navbar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchInput: '',
      movies: [],
      actor: [],
      directors: []
    }
  }

  render() {
    return (
      <div className="App">
        <div style={{backgroundColor: 'gray', opacity: .5, width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1,}}></div>
        <VideoBackground />
        <Navbar />
         
        
        
        
      </div>
    );
  }
}

export default App;
