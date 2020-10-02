import React from 'react';
import './VideoCard.css';

export default ({movie}) => {
    return (
        <div className = 'videoCard'>
            <img src = 'https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/fb-leverage-of-coding.jpg' 
            alt = 'hot'/>
            <p>This is a film about coding</p>
            <h2>Movie Title</h2>
            <p>Number of Likes...</p>
        </div>
    )
}
