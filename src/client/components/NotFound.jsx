import React from 'react';

const NotFound = props => (
    <div className="not-found">Sorry, page not found.
      <style jsx>{`
        *{
          padding: 0;
          margin: 0;
          font-family: Candara, Arial, sans-serif;
        }

        .not-found {
          max-width: 1130px;
          margin: 0 auto;
          font-weight: bold;
          font-size: 48px;
          padding: 30px 35px;
        }
      `}</style>
    </div>
);

export default NotFound;
