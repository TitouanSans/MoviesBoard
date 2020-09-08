import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Movies.css'

const Movies = (props) => {

    let movies = props.movie;

    // const [title, setTitle] = useState();
    // const [date, setDate] = useState();
    // const [clickBtn, setClickBtn] = useState(false);

    // const onCreate = (e, movie) => {
    //     e.preventDefault()
    //     Axios.post('http://localhost:3000/movies', movie)
    //     .then(result => {
    //         window.location.replace('/')
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    // const onClickBtn = () => {
    //     setClickBtn(true);
    // }

    // const onTitleChange = (e) => {
    //     setTitle(e.target.value);
    // }

    // const onDateChange = (e) => {
    //     setDate(e.target.value);
    // }

    return (
        <article>
            <Link to={`/MoviesDetails/${movies.id}`}>
                <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} />
            </Link>
            <div>
                <p className='title'>{movies.title}</p>
                <p>{movies.release_date}</p>

                <button className='btn-edit' onClick='console.log(movies.title)'>AJOUTER</button>
                    
            </div>
        </article>
    )
}

export default Movies;