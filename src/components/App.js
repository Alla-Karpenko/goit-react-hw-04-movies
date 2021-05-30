import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../services/routes';
import Navigation from './Navigation/Navigation';

const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName: "search-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const PageNotFound = lazy(() =>
  import(
    '../components/PageNotFound/PageNotFound' /* webpackChunkName: "page-not-found" */
  ),
);

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Navigation />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;