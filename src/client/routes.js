import HomePage from './containers/HomePage';
import MoviePage from './containers/MoviePage';
import NotFoundPage from './containers/NotFoundPage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/movies',
    exact: true,
    component: HomePage,
  },
  {
    path: '/movies/:id',
    exact: true,
    component: MoviePage,
  },
  {
    path: '/*',
    component: NotFoundPage,
  }
];
