import HomePage from './containers/HomePage';
import MoviePage from './containers/MoviePage';

export default [
  {
    path: '/movies',
    exact: true,
    component: HomePage,
  },
  {
    path: '/movies/:id',
    exact: true,
    component: MoviePage,
  }
];
