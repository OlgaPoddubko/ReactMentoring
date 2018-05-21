import React, { Component } from 'react';
//import movieArr from '../movieArr';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlog } from '../reducers/blog';

import ErrorBoundary from '../components/ErrorBoundary';
import SearchBlock from '../components/SearchBlock';
import ResultsSort from '../components/ResultsSort';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

class HomePage extends Component {
  static defaultProps = {
    data: [],
    total: 0,
    loading: false
  };

  static fetchData(dispatch) {
      return dispatch(fetchBlog());
    }

  componentDidMount() {
    this.props.fetchBlog();
  }

  render() {
    const { data, total, loading } = this.props;
    return (
      <React.Fragment>
        <ErrorBoundary >
          <SearchBlock />
          {loading ? <div>Loading...</div> :
          <React.Fragment>
            <ResultsSort total={total}/>
            <MovieList movies={data}/>
          </React.Fragment>
          }
          <Footer />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.blog.data,
  total: state.blog.total,
  loading: state.blog.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBlog,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
