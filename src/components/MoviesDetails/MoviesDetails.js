import React from 'react';
import { Link } from 'react-router-dom';

const MoviesDetails = (props) => {

    let moviesDetails = props.movie;

    return (
        <section>
                <img className='img-responsive' src={moviesDetails.poster} alt={moviesDetails.title} />
            <div>
                <p className='title'>{moviesDetails.title}</p>
                <p>{moviesDetails.release_date}</p>
                <p>{moviesDetails.description}</p>

                <div>
                    <Link to='/Edit'><button className='btn-edit'>MODIFIER</button></Link>
                    <Link to='/Erase'><button className='btn-erase'>SUPPRIMER</button></Link>
                </div>
            </div>
        </section>
        
    )
}

export default MoviesDetails;