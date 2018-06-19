import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';

import routes from './routes';

const App = () => (
  <div>
    <ul>
      <li><Link to="/movies">Home</Link></li>
      <li><Link to="/movies/:id">Movie</Link></li>
    </ul>

    <Switch>
      {renderRoutes(routes)}
    </Switch>

  </div>
);

export default App;
