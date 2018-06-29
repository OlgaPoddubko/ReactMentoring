import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { fetchMovie, fetchRelatedMovies } from '../actions';

import ErrorBoundary from '../components/ErrorBoundary';
import MovieInfo from '../components/MovieInfo';
import ProposeByGenre from '../components/ProposeByGenre';
import RelatedMovies from '../components/RelatedMovies';
import Footer from '../components/Footer';

class MoviePage extends Component {
  static propTypes = {
    fetchMovie: PropTypes.func.isRequired,
    fetchRelatedMovies: PropTypes.isRequired,
    currentMovie: PropTypes.object,
    match: PropTypes.shape({
     params: PropTypes.shape({
       movieId: PropTypes.string.isRequired,
     }).isRequired,
   }).isRequired,
  };

  static fetchData(dispatch, match) {
      return dispatch(fetchMovie(match.params.movieId));
    }

  componentWillMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
    if (this.props.currentMovie.genres) { this.props.fetchRelatedMovies(this.props.currentMovie.genres[0]); }
  }

  render() {
    console.log(`MoviePage ${this.props.match.params.movieId}`);
    console.log(`MoviePage currentMovie ${this.props.currentMovie.title}`);
    return (
        <React.Fragment>
          <ErrorBoundary >
            <MovieInfo />
            <ProposeByGenre />
            <RelatedMovies />
            <Footer />
          </ErrorBoundary>
        </React.Fragment>
    );
  }
}

const mapStateToProps = ( state, {match} ) => ({
  currentMovie: state.gallery.currentMovie,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovie, fetchRelatedMovies
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePage));
