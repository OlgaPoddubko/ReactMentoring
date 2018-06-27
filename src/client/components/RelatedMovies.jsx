import React, { Component } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class RelatedMovies extends Component {
  static propTypes = {
    relatedMovies: PropTypes.arrayOf(PropTypes.object),
  };

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
