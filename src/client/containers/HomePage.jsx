import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorBoundary from '../components/ErrorBoundary';
import SearchBlock from '../components/SearchBlock';
import ResultsSort from '../components/ResultsSort';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

class HomePage extends Component {
  static propTypes = {
    loading: PropTypes.bool,
  };

  static defaultProps = {
    loading: false
  };

  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary >
          <SearchBlock />
          {loading ? <div>Loading...</div> :
          <React.Fragment>
            <ResultsSort />
            <MovieList/>
          </React.Fragment>
          }
          <Footer />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.gallery.loading,
});

export default connect(mapStateToProps)(HomePage);
