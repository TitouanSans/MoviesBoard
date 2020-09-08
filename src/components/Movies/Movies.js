import React from 'react';

const Movies = (props) => {

    let movies = props.movie;

    return (
        <article>
            
            <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} />

            <div>
                <p className='title'>{movies.title}</p>
                <p>{movies.release_date}</p>

                <button className='btn-edit'>AJOUTER</button>
                    
            </div>
        </article>
    )
}

export default Movies;