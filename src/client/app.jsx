import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

const App = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/movie">Movie</Link></li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/movie" component={MoviePage}/>
      <Redirect to="/" />
    </Switch>

  </div>
);

export default App;
