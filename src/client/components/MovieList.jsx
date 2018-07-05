// @flow
import * as React from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';

type Props = {
  movies: [],
}

export class MovieList extends React.Component<Props> {
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
            padding-bottom: 90px;
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
