import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBlog, updateSearchInput } from '../reducers/blog';
import Logo from './Logo';
import SearchByButtons from './SearchByButtons';

class SearchBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
  }

  handleInputTextChange(e) {
    this.setState({search: e.target.value}); // чтоб сократить число запросов, либо - updateSearchInput
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.search.length) {
      return;
    }
    // предварительно updateSearchInput
    this.props.fetchBlog();
  }

  render() {
    return (
      <div className="header">
        <div className="inner-header">
          <Logo />

          <div className="search-block">
            <h3>Find your movie</h3>

            <form onSubmit={this.handleSubmit}>
              <input className="search-input" value={this.state.search} onChange={this.handleInputTextChange} placeholder="search" required type="text"/>
              <button className="search-button" type="submit">search</button>
            </form>

            <SearchByButtons />
          </div>
        </div>
        <style jsx>{`
          .header {
            background: #414141;
          }
          .inner-header {
            padding: 30px 35px;
            max-width: 1130px;
            margin: 0 auto;
          }
          .search-block {
            color: #ffffff;
          }
          .search-block h3 {
            text-transform: uppercase;
          }
          .search-block form {
            position: relative;
            margin: 20px 0;
          }
          .search-input {
            width: 97%;
            padding: 15px 18px;
            background: #030200;
            border: none;
            border-bottom: #e75f77;
            color: #ffffff;
          }
          .search-button {
            position: absolute;
            top: 67px;
            right: 0;
            width: 240px;
            background: #e75f77;
            color: #ffffff;
            border: none;
            text-transform: uppercase;
            padding: 10px;
          }
        `}</style>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBlog,
  updateSearchInput
}, dispatch);

export default connect(null, mapDispatchToProps)(SearchBlock);
