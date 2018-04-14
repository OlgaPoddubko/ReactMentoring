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
      <div>
        <div className="search-block">
          <h3>Find your movie</h3>

          <form onSubmit={this.handleSubmit}>
            <input value={this.state.inputText} onChange={this.handleInputTextChange} placeholder="" required type="text" className="" />
            <button className="" type="submit">search</button>
          </form>

          <span>search by</span>
          <button className="" type="button" value="title" onClick={this.handleSearchByChange}>title</button>
          <button className="" type="button" value="genre" onClick={this.handleSearchByChange}>genre</button>
        </div>

        <div>
          <p>{this.state.inputText}</p>
          <p>{this.state.searchBy}</p>
        </div>

        <style jsx>{}</style>

      </div>
    );
  }
}

export default SearchBlock;
