import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(rev => {
          return <Review key={rev.id} review={rev} deleteReview={this.props.deleteReview}/>
        })}
      </ul>
    );
  }
};

export default Reviews;