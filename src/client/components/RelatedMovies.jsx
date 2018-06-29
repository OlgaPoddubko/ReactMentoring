// @flow
import * as React from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';

type Props = {
  relatedMovies: [],
}

class RelatedMovies extends React.Component<Props> {
  static defaultProps = {
    relatedMovies: [],
  };

  render() {
    const relatedMovies = this.props.relatedMovies;
    return (
      <div className="items">
        { relatedMovies.map(elem =>
            <Movie
              key={elem.id}
              movie={elem}
            />
          )
        }
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
  relatedMovies: state.gallery.relatedMovies,
});

export default connect(mapStateToProps)(RelatedMovies);
