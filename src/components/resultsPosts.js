import React, { Component } from 'react';

import { connect } from 'react-redux'; 

class ResultsPost extends Component {
  render() {
    return (
      <div className="results-posts">
        <div className="results-posts__wrapper">
          <ul className="results-posts__posts">
            RESULTS GO HERE
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default connect(mapStateToProps)(ResultsPost);