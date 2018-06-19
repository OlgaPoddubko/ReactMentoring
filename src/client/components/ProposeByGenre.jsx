import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProposeByGenre extends Component {
  static propTypes = {
    currentMovie: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="proposal">
        <div className="inner-proposal">
          Films by {this.props.currentMovie.genres[0]} genre
        </div>
        <style jsx>{`
          .proposal {
            background: #f5f5f5;
          }
          .inner-proposal {
            padding: 15px 35px;
            max-width: 1130px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMovie: state.blog.currentMovie,
});

export default connect(mapStateToProps)(ProposeByGenre);
