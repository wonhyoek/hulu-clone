import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './LandingPage.css';
import FlipMove from "react-flip-move";


export default ({Movies}) => {

    return (
        <div className = "landingPage">
            <FlipMove>
                {Movies.map(movie => (
                    <VideoCard movie = {movie} key = {movie.id} />
                ))}
            </FlipMove>
        </div>
    )
}
