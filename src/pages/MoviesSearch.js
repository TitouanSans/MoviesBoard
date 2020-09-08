import React, { useState } from 'react';
import axios from 'axios';
import MoviesLibrary from '../components/MoviesLibrary/MoviesLibrary.js';

const MoviesSearch = () => {

    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [moviesLibrary, setMoviesLibrary] = useState();


    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onDateChange = (e) => {
        setDate(e.target.value);
    }

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
                <form onSubmit={(e) => { onSearch(e) }}>

                    <div>
                        <label>Titre : </label>
                        <input type='text' placeholder="exemple: Batman" onChange={(e) => ( onTitleChange(e) )}></input>
                    </div>

                    <div>
                        <label>Année : </label>
                        <input type='number' onChange={(e) => ( onDateChange(e) )}></input>
                    </div>

                    <input type='submit' value='Rechercher'></input>
                
                </form>
            </article>
                {moviesLibrary !== undefined && < MoviesLibrary moviesLibrary={moviesLibrary} />}
                
        </section>

        
    )

}

export default MoviesSearch;