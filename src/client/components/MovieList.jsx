import React, { Component } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    movies: [],
  };

  render() {
    const movies = this.props.movies;
    return (
      <div className="items">
        {movies.map(elem =>
          <Movie
            key={elem.id}
            movie={elem}
          />
        )}
        <style jsx>{`
          .items {
            max-width: 1200px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.gallery.movies,
});

export default connect(mapStateToProps)(MovieList);
