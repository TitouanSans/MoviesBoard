import React from 'react';
import Movies from '../Movies/Movies.js';

const MoviesLibrary = (props) => {

    let moviesLibrary = props.moviesLibrary;
    console.log(moviesLibrary);
    
    return (
        <section>
            {moviesLibrary.map((movie, index) => (
                <Movies movie={movie} key={index} />
            ))}
        </section>
    
    )
}

export default MoviesLibrary;