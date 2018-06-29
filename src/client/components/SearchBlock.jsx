import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGallery, changeSearchInput } from '../actions';
import Header from './Header';
import SearchByButtons from './SearchByButtons';

class SearchBlock extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputTextChange = this.handleInputTextChange.bind(this);

    this.boundActions = bindActionCreators({fetchGallery, changeSearchInput}, this.props.dispatch);
  }

  static propTypes = {
    state: PropTypes.object,
    search: PropTypes.string,
  };

  handleInputTextChange(e) {
    this.boundActions.changeSearchInput(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.search.length) {
      return;
    }
    this.boundActions.fetchGallery(this.props.state);
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="search-block">
          <div className="inner-search-block">
            <h3>Find your movie</h3>

            <form onSubmit={this.handleSubmit}>
              <input className="search-input" value={this.props.search} onChange={this.handleInputTextChange} placeholder="search" required type="text"/>
              <button className="search-button" type="submit">search</button>
            </form>

            <SearchByButtons />
          </div>
        </div>
        <style jsx>{`
          .search-block {
            background: #414141;
            color: #ffffff;
          }
          .inner-search-block {
            margin: 0 auto;
            padding: 30px 35px;
            max-width: 1130px;
          }
          .inner-search-block h3 {
            text-transform: uppercase;
          }
          .inner-search-block form {
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  state: state.gallery,
  search: state.gallery.search,
});

export default connect(mapStateToProps)(SearchBlock);
