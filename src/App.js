import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './components/css/Filter.css';
import { MyMoviesLibrary, MoviesSearch, MyDetails, MoviesDetails } from './pages';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then((result) => {
        console.log(result.data);
        setMovies(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <Router>
      <main className='App'>
        <nav>
            <string className='logo'>MOVIES-BOARD</string>
            <Link to="/"><button>MA LISTE</button></Link>
            <Link to='/MoviesSearch'><button>+ AJOUTER FILM</button></Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <MyMoviesLibrary movies={movies} />
          </Route>

          <Route exact path='/MoviesSearch'>
            <MoviesSearch />
          </Route>

          <Route exact path='/MyDetails/:id'>
            <MyDetails movies={movies}/>
          </Route>

          <Route exact path='/MoviesDetails/:id'>
            <MoviesDetails movies={movies}/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
