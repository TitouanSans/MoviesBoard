import React from 'react';
import MyMovies from '../components/MyMovies/MyMovies.js';

// Page par défaut, affiche le composant MyMovies
const MyMoviesLibrary = (props) => {

    let myLibrary = props.movies;

    return (
        <section>
            <h1>MA LISTE DE FILMS</h1>
            {myLibrary.map((movie, index) => (
                <MyMovies movie={movie} key={index}/>
            ))}
        </section>
        
    )
}

export default MyMoviesLibrary;