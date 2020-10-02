import React from 'react';
import requsetTmdb from '../../utils/requsetTmdb';
import './NavBar.css'

export default ({setSelectedOption}) => {
    return (
        <div className = 'nav__container'>
            <div className = 'nav'>
                <h2 onClick = {() => {
                    setSelectedOption(requsetTmdb.fetchTrending)
                }}>Trending</h2>
                <h2 onClick = {() => {
                    setSelectedOption(requsetTmdb.fetchTopRated)
                }}>Top Rated</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchActionMovies)}>Action</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchComedyMovies)}>Comedy</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchHorrorMovies)}>Horror</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchRomanceMovies)}>Romance</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchMystery)}>Mystery</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchSciFi)}>Sci-fi</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchWestern)}>Western</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchAnimation)}>Animation</h2>
                <h2 onClick = {() => setSelectedOption(requsetTmdb.fetchTV)}>TV Movie</h2>
            </div>
        </div>
    )
}
