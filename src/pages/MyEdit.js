import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const MyEdit = (props) => {

    let id = useParams();
    let thatMovie = props.movies.filter(movie => movie.id == id.id);

    return (
        <section>
            <h1>MODIFIER MON FILM</h1>

            <article>
                <img src={thatMovie[0].poster} alt={thatMovie[0].title} />
                <div>
                    <p className='title'>{thatMovie[0].title}</p>

                    <div>
                        <Link to='/Erase'><button className='btn-erase'>SUPPRIMER</button></Link>
                    </div>
                </div>
                 <form className="filter">

                    <div>
                        <label>Titre : </label>
                        <input type='text' placeholder="Nouveau titre"></input>
                    </div>
                    <div>
                        <label>Date de parution: </label>
                        <input type='date'></input>
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Photo: </label>
                        <input type='url' placeholder="https://image.tmdb.org/t/p/w342/"></input>
                    </div>
                    <div>
                        <label>Catégorie: </label>
                        <input type='text' placeholder="Action, Suspense, Romance"></input>
                    </div>

                    <input type='submit' value='VALIDER'></input>

                </form>
                
            </article>
        </section>
    )
}


export default MyEdit;