import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './movies/Home';
import Movies from './movies/Movies';

const App = () => (
<>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/movies">Movies</NavLink>
    </li>
    
  </ul>

  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/movies" component={Movies}/>
  </Switch>
</>

);

export default App;
