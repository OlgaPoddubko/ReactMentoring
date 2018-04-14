import React from 'react';

class ResultsSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'release date'
    };

    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleSortByChange(e) {
    this.setState({sortBy: e.target.value});
  }

  render() {
    return (
      <div>
        <span>{this.props.total} movies found </span>

        <span>sort by</span>
        <button className="" type="button" value="release date" onClick={this.handleSortByChange}>release date</button>
        <button className="" type="button" value="rating" onClick={this.handleSortByChange}>rating</button>

        <style jsx>{}</style>

        <div>
          <p>{this.state.sortBy}</p>
        </div>

      </div>
    );
  }
}

export default ResultsSort;
