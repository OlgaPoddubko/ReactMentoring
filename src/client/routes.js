import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

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
