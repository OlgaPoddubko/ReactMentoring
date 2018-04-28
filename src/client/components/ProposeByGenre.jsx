import React from 'react';

const ProposeByGenre = props => (
  <div className="proposal">
    <div className="inner-proposal">
      Films by {props.movie.genres[0]} genre
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

export default ProposeByGenre;
