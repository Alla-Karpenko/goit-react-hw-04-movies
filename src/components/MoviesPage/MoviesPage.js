import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { fetchMoviesWithQuery } from '../../services/moviesApi';
import routes from '../../services/routes';

function MoviesPage(props) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [notice, setNotice] = useState('');
  const location = useLocation();
  const search = queryString.parse(location.search);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
   
    props.history.push({
      search: `query=${query}`,
    });
    setQuery('');
  };

  useEffect(() => {
    search.query &&
      fetchMoviesWithQuery(search.query)
        .then(results => {
          if (results.length) {
            setNotice('');
            setMovies(results);
          } else {
            setMovies([]);
            setNotice(
              'Not found:( Enter the correct movie name and try again.',
            );
          }
        })
        .catch(error => setNotice(error.response.data.status_message));
  }, [search.query]);

  return (
    <div>
      <h2>Search movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          value={query}
          onChange={handleChange}
        />

        <button type="submit" >
          <span>Search</span>
        </button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `${routes.movies}/${movie.id}`,
                state: {
                  search: location && location.search ? location.search : '',
                  from: props.location.pathname,
                },
              }}
            >
              <span>
                {movie.title || movie.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {notice && <p>{notice}</p>}

  
    </div>
  );
}

export default MoviesPage;

