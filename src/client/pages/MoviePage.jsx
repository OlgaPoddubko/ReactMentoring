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
      <div>
        <div>
          {this.state.greeting}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MoviePage;
