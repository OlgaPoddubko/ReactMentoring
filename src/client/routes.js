import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/movie',
    exact: true,
    component: MoviePage,
  }
];
