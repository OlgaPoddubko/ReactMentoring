import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSearchBy } from '../actions';

class SearchByButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchByChange = this.handleSearchByChange.bind(this);
    this.boundActions = bindActionCreators({changeSearchBy}, this.props.dispatch);
  }

  static propTypes = {
    searchBy: PropTypes.string.isRequired,
  };

  handleSearchByChange(e) {
    this.boundActions.changeSearchBy(e.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <span>search by</span>
        <button className= { this.props.searchBy == 'title' ? 'active-search search-by' : 'search-by'} type="button" value="title" onClick={this.handleSearchByChange}>title</button>
        <button className= { this.props.searchBy == 'genres' ? 'active-search search-by' : 'search-by'} type="button" value="genres" onClick={this.handleSearchByChange}>genre</button>

        <style jsx>{`
          .search-by {
            margin-left: 20px;
            padding: 10px;
            width: 100px;
            background: #4d4d4d;
            color: #ffffff;
            border: none;
            text-transform: uppercase;
          }
          .active-search {
            background: #e75f77;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searchBy: state.gallery.searchBy,
});

export default connect(mapStateToProps)(SearchByButtons);
