import React from 'react';
/*
const Footer = React.createElement(
  "p",
  {className: "footer"},
  "netflixroulette"
);

//Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
*/

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
      netflixroulette
      </div>
    );
  }
}

export default Footer;
