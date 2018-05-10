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
      <div className="results-sort">
        <div className="inner-results-sort">
          <div className="sorting-params">
            <span>sort by</span>
            <button className={ this.state.sortBy == 'release date' ? 'active-sort' : ''} type="button" value="release date" onClick={this.handleSortByChange}>release date</button>
            <button className={ this.state.sortBy == 'rating' ? 'active-sort' : ''} type="button" value="rating" onClick={this.handleSortByChange}>rating</button>
          </div>

          <span className="items-found">{this.props.total} movies found </span>
        </div>
        <style jsx>{`
          .results-sort {
            background: #f5f5f5;
          }
          .inner-results-sort {
            padding: 15px 35px;
            max-width: 1130px;
            margin: 0 auto;
          }
          .sorting-params {
            float: right;
            display: inline-block;
            text-align: right;
          }
          .sorting-params button {
            margin-left: 30px;
            border: none;
            background: #f5f5f5;
            font-size: inherit;
          }
          .active-sort {
            color: #e75f77;
          }
        `}</style>

      </div>
    );
  }
}

export default ResultsSort;
