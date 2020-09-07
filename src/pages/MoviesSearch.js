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
            <div>
                <h1>Recherche de Films</h1>
                <form onSubmit={(e) => { onSearch(e) }}>

                    <label>Titre : </label>
                    <input type='text' onChange={(e) => ( onTitleChange(e) )}></input>

                    <label>Date sortie : </label>
                    <input type='date' onChange={(e) => ( onDateChange(e) )}></input>
                
                    <input type='submit' value='Rechercher'></input>
                
                </form>
                {moviesLibrary !== undefined && < MoviesLibrary moviesLibrary={moviesLibrary} />}
                
            </div>
        </section>

        
    )

}

export default MoviesSearch;