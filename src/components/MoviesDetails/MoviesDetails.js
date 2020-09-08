import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const MoviesDetails = (props) => {

    let id = useParams();
    let moviesDetails = props.movies.filter(movie => movie.id == id.id);

    return (
        <main>
            <img className='img-responsive' src={moviesDetails[0].poster} alt={moviesDetails[0].title} />
            <div>
                <p className='title'>{moviesDetails[0].title}</p>
                <p>{moviesDetails[0].release_date}</p>
                <p>{moviesDetails[0].description}</p>
                <p>{moviesDetails[0].actor}</p>

                <div>
                    <Link to='/edit'><button className='btn-edit'>MODIFIER</button></Link>
                    <Link to='/erase'><button className='btn-erase'>SUPPRIMER</button></Link>
                </div>
            </div>
            
        </main>
    )
}

export default MoviesDetails;