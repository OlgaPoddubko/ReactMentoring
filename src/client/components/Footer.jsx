import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="inner-footer">netflixroulette</div>
    <style jsx>{`
      html, body {
        height: 100%;
      }

      #root{
        min-height: 100%;
        position: relative;
      }

      .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #414141;
      }

      .inner-footer {
        max-width: 1130px;
        margin: 0 auto;
        color: #e75f77;
        font-weight: bold;
        padding: 30px 35px;
      }
    `}</style>
  </div>
);

export default Footer;
