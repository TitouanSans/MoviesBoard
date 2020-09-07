import React from 'react';
import { Link } from 'react-router-dom';

const MyMovies = (props) => {

    let myMovies = props.movie;

    return (
        <section>
            <Link to={`/Details/${myMovies.id}`}>
                <img className='img-responsive' src={myMovies.poster} alt={myMovies.title} />
            </Link>
            <div>
                <p className='title'>{myMovies.title}</p>
                <p>{myMovies.release_date}</p>
                <p>{myMovies.description}</p>

                <div>
                    <Link to='/edit'><button className='btn-edit'>MODIFIER</button></Link>
                    <Link to='/erase'><button className='btn-erase'>SUPPRIMER</button></Link>
                </div>
            </div>
        </section>
        
    )
}

export default MyMovies;