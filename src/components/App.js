import React from 'react';
import Header from "./views/Header/Header";
import './App.css';
import NavBar from './views/NavBar/NavBar';
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <div className = 'app'>
      <Header/>
      <NavBar/>
      <LandingPage/>
    </div>
  );
}

export default App;
