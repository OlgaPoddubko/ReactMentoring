import React from 'react';
//import {Route, Link, Switch, Redirect} from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';

import routes from './routes';

//import HomePage from './pages/HomePage';
//import MoviePage from './pages/MoviePage';

const App = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/movie">Movie</Link></li>
    </ul>

    <Switch>
      {renderRoutes(routes)}
    </Switch>

  </div>
);

export default App;
