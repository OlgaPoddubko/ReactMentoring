// @flow
import * as React from 'react';
import { connect } from 'react-redux';

type Props = {
  currentMovie: {
    genres?: Array<string>
  },
}

class ProposeByGenre extends React.Component<Props> {
  render() {
    return (
      <div className="proposal">
        <div className="inner-proposal">
          Films by {this.props.currentMovie.genres ? this.props.currentMovie.genres[0] : ''} genre
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
  currentMovie: state.gallery.currentMovie,
});

export default connect(mapStateToProps)(ProposeByGenre);
