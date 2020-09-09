import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Movies.css'
import axios from 'axios';

//EN CONSTRUCTION : POST de 'movies' contenant les infos de TOUS les films sur la bibli local
// function addMovie(movies){
//     axios.post('http://localhost:3001/movies', movies);
//     console.log(movies);
// }

const Movies = (props) => {

    let movies = props.movie;

    //Affichage des films 
    return (
        <article>
            {/* EN CONSTRUCTION : Affichage des détails du film dans la page dédiée. */}
            {/* <Link to={`/MoviesDetails/${movies.id}`}> */}
                <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} />
            {/* </Link> */}
            <div>
                <p className='title'>{movies.title}</p>
                <p>{movies.release_date}</p>

                {/* EN CONSTRUCTION : onClick appelant la fonction d'ajout sur la bibli local */}
                <button className='btn-edit' /*onClick={addMovie(movies), console.log('CLICK')}*/>AJOUTER</button>
                    
            </div>
        </article>
    )
}

export default Movies;