import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentMovie, fetchRelatedMovies } from '../actions';
import { Link } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.boundActions = bindActionCreators({setCurrentMovie, fetchRelatedMovies}, this.props.dispatch);
  }

  handleClick(e) {
    this.boundActions.setCurrentMovie(this.props.movie);
    this.boundActions.fetchRelatedMovies(this.props.movie.genres[0]);
  }

  render() {
    const movie = this.props.movie;
    return (
      <div className="item" onClick={this.handleClick}>
        <div className='item-img'>
          <img src={movie.poster_path} />
        </div>
        <div className='item-description'>
          <span className='item-year'>{movie.release_date}</span>
          <Link to={`/movies/:${movie.id}`}>
            <h4 className='item-title'>{movie.title}</h4>
          </Link>
          <p className='item-genre'>{movie.genres}</p>
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
      </div>
    );
  }
}

export default connect()(Movie);
