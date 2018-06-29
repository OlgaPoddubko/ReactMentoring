import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorBoundary from '../components/ErrorBoundary';
import SearchBlock from '../components/SearchBlock';
import ResultsSort from '../components/ResultsSort';
import MovieList from '../components/MovieList';
import EmptySearchResult from '../components/EmptySearchResult';
import Footer from '../components/Footer';

class HomePage extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    movies: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    loading: false,
    movies: [],
  };

  render() {
    const { loading, movies } = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary >
          <SearchBlock />
          {loading ?
            <div>Loading...</div>
            : movies.length ?
          <React.Fragment>
            <ResultsSort />
            <MovieList/>
          </React.Fragment>
          : <EmptySearchResult />
          }
          <Footer />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.gallery.loading,
  movies: state.gallery.movies,
});

export default connect(mapStateToProps)(HomePage);
