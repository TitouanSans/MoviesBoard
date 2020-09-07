import React from 'react';
import MyMovies from '../components/MyMovies/MyMovies.js';

const MyMoviesLibrary = (props) => {

    let myLibrary = props.movies;

    return (
        <main>
            <h1>MA LISTE DE FILMS</h1>
            {myLibrary.map((movie, index) => (
                <MyMovies movie={movie} key={index}/>
            ))}
        </main>
        
    )
}

export default MyMoviesLibrary;