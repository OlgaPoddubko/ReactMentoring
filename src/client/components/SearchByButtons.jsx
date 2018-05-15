import React from 'react';

class SearchByButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchBy: 'title' };
    this.handleSearchByChange = this.handleSearchByChange.bind(this);
  }

  handleSearchByChange(e) {
    this.setState({searchBy: e.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <span>search by</span>
        <button className= { this.state.searchBy == 'title' ? 'active-search search-by' : 'search-by'} type="button" value="title" onClick={this.handleSearchByChange}>title</button>
        <button className= { this.state.searchBy == 'genre' ? 'active-search search-by' : 'search-by'} type="button" value="genre" onClick={this.handleSearchByChange}>genre</button>

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

export default SearchByButtons;
