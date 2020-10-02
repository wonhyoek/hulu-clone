import React, { useState, useEffect } from 'react';
import axios from "./utils/axios";
import Header from "./views/Header/Header";
import './App.css';
import NavBar from './views/NavBar/NavBar';
import LandingPage from "./views/LandingPage/LandingPage";
import requestTmdb from './utils/requsetTmdb';

function App() {

  const [SelectedOption, setSelectedOption] = useState(requestTmdb.fetchTrending);
  const [Movies, setMovies] = useState([]);

      useEffect(() => {
        if(SelectedOption){
          axios.get(SelectedOption)
          .then(response => {
            setMovies(response.data.results);
        })
        }
        
    }, [SelectedOption])

  return (
    <div className = 'app'>
      <Header/>
      <NavBar setSelectedOption = {setSelectedOption}/>
      <LandingPage Movies = {Movies}/>
    </div>
  );
}

export default App;
