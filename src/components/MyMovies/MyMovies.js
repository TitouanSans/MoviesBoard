import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Movies.css'

const MyMovies = (props) => {

    let myMovies = props.movie;

    // Affichage des films du serveur local
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
                    
                    {/* EN CONSTRUCTION  */}
                    <Link to={`/MyEdit/${myMovies.id}`}><button className='btn-edit'>MODIFIER</button></Link>
                    <Link to='/Erase'><button className='btn-erase'>SUPPRIMER</button></Link>
                </div>
            </div>
        </article>
        
    )
}

export default MyMovies;