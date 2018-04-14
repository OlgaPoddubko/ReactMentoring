import React from 'react';
import Footer from '../components/Footer';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hi!'
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.greeting}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default MoviePage;
