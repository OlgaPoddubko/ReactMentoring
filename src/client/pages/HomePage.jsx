import React from 'react';
import movieArr from '../movieArr';

import ErrorBoundary from '../components/ErrorBoundary';
import SearchBlock from '../components/SearchBlock';
import ResultsSort from '../components/ResultsSort';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

class HomePage extends React.Component {
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
          <SearchBlock />
          <ResultsSort total={this.state.total}/>
          <MovieList movies={this.state.data}/>
          <Footer />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default HomePage;
