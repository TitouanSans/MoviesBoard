import React from 'react';
import { useParams } from 'react-router';

const MoviesDetails = (props) => {

    let id = useParams();
    let thatMovie = props.movies.filter(movie => movie.id == id.id);

    console.log('thatMovie : ', thatMovie);
    console.log('thatMovie[0]', thatMovie[0]);

    return (
        <section>
            <h1>DETAILS DU FILM</h1>

            <article>
                <img src={`https://image.tmdb.org/t/p/w342${thatMovie.poster_path}`} alt={thatMovie.title} />
                <div>
                    <p className='title'>{thatMovie[0].title}</p>
                    <p>{thatMovie[0].release_date}</p>
                    <p>{thatMovie[0].description}</p>

                    <div>
                        <button className='btn-add'>AJOUTER</button>
                    </div>
                </div>
                
            </article>
        </section>
    )
}

export default MoviesDetails;