import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Movies.css'

const MyMovies = (props) => {

    let myMovies = props.movie;

    return (
        <article>
            <Link to={`/MyDetails/${myMovies.id}`}>
                <img src={myMovies.poster} alt={myMovies.title} />
            </Link>
            <div>
                <p className='title'>{myMovies.title}</p>
                <p>{myMovies.release_date}</p>
                <p>{myMovies.description}</p>

                <div>
                    <Link to={`/MyDetails/${myMovies.id}`}><button className='btn-details'>DETAILS</button></Link>
                    <Link to='/edit'><button className='btn-edit'>MODIFIER</button></Link>
                    <Link to='/erase'><button className='btn-erase'>SUPPRIMER</button></Link>
                </div>
            </div>
        </article>
        
    )
}

export default MyMovies;