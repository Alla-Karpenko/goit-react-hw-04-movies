// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import routes from '../../services/routes';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/moviesApi';

function HomePage(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    })();
  }, []);

  return (
    <>
      <h1 >Trending Today</h1>
      <ul >
        {movies.map(movie => (
          <li key={movie.id} >
            <Link
              to={{
                pathname: `${routes.movies}/${movie.id}`,
                state: { from: props.location.pathname },
              }}
            >
              <span>
                {movie.title || movie.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;

