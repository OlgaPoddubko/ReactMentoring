// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { fetchMovie, fetchRelatedMovies } from '../actions';

import ErrorBoundary from '../components/ErrorBoundary';
import MovieInfo from '../components/MovieInfo';
import ProposeByGenre from '../components/ProposeByGenre';
import RelatedMovies from '../components/RelatedMovies';
import Footer from '../components/Footer';

type Props = {
  fetchMovie: Function,
  fetchRelatedMovies: Function,
  currentMovie: {
    genres?: Array<string>
  },
  match: {
   params: {
     movieId: string
   }
 },
}

class MoviePage extends React.Component<Props> {
  static fetchData(dispatch, match) {
      return dispatch(fetchMovie(match.params.movieId));
    }

  componentWillMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
    if (this.props.currentMovie.genres) { this.props.fetchRelatedMovies(this.props.currentMovie.genres[0]); }
  }

  render() {
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
