import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
//import MoviesDetails from '../components/MoviesDetails/MoviesDetails.js';


const Details = (props) => {

    let id = useParams();
    let thatMovie = props.movies.filter(movie => movie.id == id.id);

    console.log(thatMovie);
    return (
        <section>
            <h1>DETAILS DU FILM</h1>

            <article>
                <img src={thatMovie[0].poster} alt={thatMovie[0].title} />
                <div>
                    <p className='title'>{thatMovie[0].title}</p>
                    <p>{thatMovie[0].release_date}</p>
                    <p>{thatMovie[0].description}</p>
                    <p>{thatMovie[0].actor}</p>

                    <div>
                        <Link to='/edit'><button className='btn-edit'>MODIFIER</button></Link>
                        <Link to='/erase'><button className='btn-erase'>SUPPRIMER</button></Link>
                    </div>
                </div>
                
            </article>
        </section>
    )
}


export default Details;