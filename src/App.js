import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './components/css/Filter.css';
import { MyMoviesLibrary, MoviesSearch, MyDetails, MoviesDetails } from './pages';

function App() {

  // Stockage des infos du tableau des films du serveur local
  const [movies, setMovies] = useState([]);
  // Recherche du tableau des films du serveur local
  useEffect(() => {
    axios.get('http://localhost:3001/movies')
      .then((result) => {
        console.log(result.data);
        setMovies(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  //Mise en place Router, accés rapide aux différentes pages de l'appli tout en restant sur App.js
  //App.js sert de page principale & affiche une à une les autres pages
  //La page affichée de base est MyMoviesLibrary
  return (
    <Router>
      <main className='App'>

        {/* Barre de navigation non contenue dans une Route donc affichée constamment */}
        <nav>
            <string className='logo'>MOVIES-BOARD</string>
            {/* Retour à la page MyMoviesLibrary */}
            <div>
              <Link to="/"><button>MA LISTE</button></Link>
              <Link to='/MoviesSearch'><button>+ AJOUTER FILM</button></Link>
            </div>
        </nav>

        <Switch>
          {/* Page contenant la bibliotheque local */}
          <Route exact path="/">
            <MyMoviesLibrary movies={movies} />
          </Route>

          {/* Page de recherche de film depuis TMDB */}
          <Route exact path='/MoviesSearch'>
            <MoviesSearch />
          </Route>

          {/* Page affichant les détails des films locaux*/}
          <Route exact path='/MyDetails/:id'>
            <MyDetails movies={movies}/>
          </Route>

          {/*EN CONSTRUCTION : Page affichant les détails des films de TMDB*/}
          <Route exact path='/MoviesDetails/:id'>
            <MoviesDetails movies={movies}/>
          </Route>

        </Switch>
      </main>
    </Router>
  );
}

export default App;
