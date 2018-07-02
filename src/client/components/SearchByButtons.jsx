// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSearchBy } from '../actions';

type Props = {
  searchBy: string,
  changeSearchBy: Function,
  dispatch: Function,
}

export class SearchByButtons extends React.Component<Props> {
  constructor(props) {
    super(props);
    (this:any).handleSearchByChange = this.handleSearchByChange.bind(this);
  }

  handleSearchByChange(e) {
    this.props.changeSearchBy(e.target.value);
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

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSearchBy,
}, dispatch);

export default connect(mapDispatchToProps)(SearchByButtons);
