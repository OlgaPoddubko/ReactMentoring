import React from 'react';

const EmptySearchResult = ()=> (
    <div className="empty-search-results">No films found.
      <style jsx>{`
        .empty-search-results {
          max-width: 1130px;
          margin: 0 auto;
          padding: 60px 35px;
          text-align: center;
          font-weight: bold;
          font-size: 48px;
        }
      `}</style>
    </div>
);

export default EmptySearchResult;
