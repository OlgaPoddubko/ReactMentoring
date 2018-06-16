import React from 'react';

// functioanal component
const Movie = props => (
  <div className="item">
    <div className='item-img'>
      <img src={props.poster_path} />
    </div>
    <div className='item-description'>
      <span className='item-year'>{props.release_date}</span>
      <h4 className='item-title'>{props.title}</h4>
      <p className='item-genre'>{props.genres}</p>
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

export default Movie;
