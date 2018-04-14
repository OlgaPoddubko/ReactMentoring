import React from 'react';
import movieArr from '../movieArr';

import MovieList from '../components/MovieList';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: movieArr };
  }
  render() {
    return <MovieList movies={this.state.data} />;
  }
}

export default HomePage;
