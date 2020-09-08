import React from 'react';
import Movies from '../Movies/Movies.js';
import '../css/Movies.css';

const MoviesLibrary = (props) => {

    let moviesLibrary = props.moviesLibrary;
    
    return (
        <div>
            {moviesLibrary.map((movie, index) => (
                <Movies movie={movie} key={index} />
            ))}
        </div>
    
    )
}

export default MoviesLibrary;