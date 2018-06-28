import React from 'react';

const Header = props => (
  <div className="header">
      <div className='logo'>netflixroulette
    </div>
    <style jsx>{`
      *{
        padding: 0;
        margin: 0;
        font-family: Candara, Arial, sans-serif;
      }

      .header {
        background: #414141;
      }

      .logo {
        padding: 30px 35px;
        max-width: 1130px;
        margin: 0 auto;
        color: #e75f77;
      }
    `}</style>
  </div>
);

export default Header;
