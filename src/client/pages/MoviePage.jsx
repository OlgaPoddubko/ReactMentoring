import React from 'react';
import movieArr from '../movieArr';

import ErrorBoundary from '../components/ErrorBoundary';
import MovieInfo from '../components/MovieInfo';
import ProposeByGenre from '../components/ProposeByGenre';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: movieArr.data,
      total: movieArr.total
    };
  }

  render() {
    return (
      <React.Fragment>
        <ErrorBoundary >
          <MovieInfo movie={movieArr.data[0]} />
          <ProposeByGenre movie={movieArr.data[0]} />
          <MovieList movies={this.state.data}/>
          <Footer />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default MoviePage;
