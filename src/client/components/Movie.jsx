// @flow
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentMovie, fetchRelatedMovies } from '../actions';
import { Link } from 'react-router-dom';

type Props = {
  movie: {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    genres: Array<string>
  },
  setCurrentMovie: Function,
  fetchRelatedMovies: Function,
  dispatch: Function,
}

export class Movie extends React.Component<Props> {
  constructor(props) {
    super(props);

    (this: any).handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.setCurrentMovie(this.props.movie);
    this.props.fetchRelatedMovies(this.props.movie.genres[0]);
  }

  render() {
    const movie = this.props.movie;
    return (
      <Link to={`/movies/${movie.id}`}>
        <div className="item" onClick={this.handleClick}>
          <div className='item-img'>
            <img src={movie.poster_path} />
          </div>
          <div className='item-description'>
            <span className='item-year'>{movie.release_date}</span>
              <h4 className='item-title'>{movie.title}</h4>
            <p className='item-genre'>{movie.genres}</p>
          </div>
        </div>
        <style jsx>{`
          .item {
            display: inline-block;
            width: 27%;
            height: 540px;
            margin: 20px 36.7px;
          }
          .item-img {
            height: 500px;
            overflow: hidden;
          }
          .item-img img {
            width: 100%;
            height: auto;
          }
          .item-description {
            padding: 6px;
          }
          .item-year {
            float: right;
          }
          .item-title {
            display: inline-block;
            text-transform: uppercase;
          }
        `}</style>
      </Link>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setCurrentMovie, fetchRelatedMovies
}, dispatch);

export default connect(null, mapDispatchToProps)(Movie);
