import React, { useState } from 'react';
import axios from 'axios';
import MoviesLibrary from '../components/MoviesLibrary/MoviesLibrary.js';

const MoviesSearch = () => {

    //Stockage des champs entrés dans le formulaire de filtrage des films
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    //Stockage des données de tous les films trouvés
    const [moviesLibrary, setMoviesLibrary] = useState();

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const onDateChange = (e) => {
        setDate(e.target.value);
    }

    //Extraction des données des films de TMDB
    const onSearch = (e) => {
        e.preventDefault()
        axios.get(`
        https://api.themoviedb.org/3/search/movie?api_key=b7fea8404c333c0cfdaf616952854d32&query=${title}`)
            .then((result) => {
                setMoviesLibrary(result.data.results);
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    console.log(moviesLibrary);

    return (
        <section>
            <h1>RECHERCHE DE FILMS</h1>
            <article className='filter'>
                {/* Formulaire pour filtrer la recherche de films */}
                <form onSubmit={(e) => { onSearch(e) }}>

                    <div>
                        {/* Par Titre */}
                        <label>Titre : </label>
                        <input type='text' placeholder="exemple: Batman" onChange={(e) => ( onTitleChange(e) )}></input>
                    </div>

                    <div>
                        {/* EN CONSTRUCTION : par date */}
                        <label>Année : </label>
                        <input type='number' onChange={(e) => ( onDateChange(e) )}></input>
                    </div>

                    <input type='submit' value='Rechercher'></input>

                </form>
            </article>

            {/* Appel du composant affichant chaque film */}
            {moviesLibrary !== undefined && < MoviesLibrary moviesLibrary={moviesLibrary} />}

        </section>


    )

}

export default MoviesSearch;