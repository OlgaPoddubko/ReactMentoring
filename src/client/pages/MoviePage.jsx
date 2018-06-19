import React from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import MovieInfo from '../components/MovieInfo';
import ProposeByGenre from '../components/ProposeByGenre';
import RelatedMovies from '../components/RelatedMovies';
import Footer from '../components/Footer';

const MoviePage = () => (
      <React.Fragment>
        <ErrorBoundary >
          <MovieInfo />
          <ProposeByGenre />
          <RelatedMovies />
          <Footer />
        </ErrorBoundary>
      </React.Fragment>
    );

export default MoviePage;
