import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import MoviesDetails from '../components/MoviesDetails/MoviesDetails.js';
import { useParams } from 'react-router';

const Details = (props) => {

    let id = useParams();
    let thatMovie = props.movies.filter(movie => movie.id == id.id);

    console.log(thatMovie);
    return (
        <main>
            <h1>INFORMATIONS DU FILM</h1>
            <img className='img-responsive' src={thatMovie[0].poster} alt={thatMovie[0].title} />
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
            
        </main>
    )
}


export default Details;