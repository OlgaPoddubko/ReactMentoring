// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

type Props = {
  currentMovie: {
    poster_path: string,
    title: string,
    vote_average: number,
    genres?: Array<string>,
    release_date: string,
    runtime: number,
    overview: string,
  },
}

class MovieInfo extends React.Component<Props> {
  render() {
    const { poster_path, title, vote_average, genres, release_date, runtime, overview } = this.props.currentMovie;
    return (
      <React.Fragment>
        <Header />
        <div className="movie-info">
          <div className="inner-movie-info">
            <div className="movie-img">
              <img src={poster_path} />
            </div>
            <div className="movie-description">
              <h2 className="movie-title">{title}</h2>
              <span className="movie-vote">{vote_average}</span>
              <p className="movie-genres">{genres}</p>
              <span className="movie-date">{release_date}</span>
              <span className="movie-runtime">{runtime}</span>
              <p className="movie-overview">{overview}</p>
            </div>
            <div className="clear"></div>
        </div>
      </div>
        <style jsx>{`
          .movie-info {
            background: #414141;
          }
          .inner-movie-info {
            max-width: 1130px;
            margin: 0 auto;
            padding: 30px 35px 50px;
            color: #ffffff;
          }
          .movie-img {
            display: inline-block;
            width: 365px;
            height: 516px;
            overflow: hidden;
          }
          .movie-img img {
            width: 100%;
            height: auto;
          }
          .movie-description {
            display: inline-block;
            width: 660px;
            float: right;
          }
          .movie-title {
            display: inline-block;
            margin-top: -15px;
            max-width: 85%;
            color: #e75f77;
            font-size: 38px;
          }
          .movie-vote {
            border: 1px solid #bad3a9;
            display: inline-block;
            padding: 15px;
            width: 25px;
            height: 25px;
            margin-left: 25px;
            border-radius: 30px;
            color: #bad3a9;
            text-align: center;
          }
          .movie-date, .movie-runtime {
            font-weight: bold;
          }
          .movie-runtime {
            margin-left: 20px;
          }
          .movie-overview {
            font-size: 18px;
            margin-top: 20px;
          }

          .clear {
            clear: both;
          }

        `}</style>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ( state ) => ({
  currentMovie: state.gallery.currentMovie
});

export default connect(mapStateToProps)(MovieInfo);
