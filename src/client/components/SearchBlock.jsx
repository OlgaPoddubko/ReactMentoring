import React from 'react';

class SearchBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchBy: 'title'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleSearchByChange = this.handleSearchByChange.bind(this);
  }

  handleInputTextChange(e) {
    this.setState({inputText: e.target.value});
  }

  handleSearchByChange(e) {
    this.setState({searchBy: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.inputText.length) {
      return;
    }
    // fetch
  }

  render() {
    return (
      <div className="header">
        <div className="inner-header">
          <div className="logo">netflixroulette</div>

          <div className="search-block">
            <h3>Find your movie</h3>

            <form onSubmit={this.handleSubmit}>
              <input className="search-input" value={this.state.inputText} onChange={this.handleInputTextChange} placeholder="search" required type="text"/>
              <button className="search-button" type="submit">search</button>
            </form>

            <span>search by</span>
            <button className= { this.state.searchBy == 'title' ? 'active-search search-by' : 'search-by'} type="button" value="title" onClick={this.handleSearchByChange}>title</button>
            <button className= { this.state.searchBy == 'genre' ? 'active-search search-by' : 'search-by'} type="button" value="genre" onClick={this.handleSearchByChange}>genre</button>
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
          .logo {
            color: #e75f77;
            margin-bottom: 60px;
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
      </div>
    );
  }
}

export default SearchBlock;
