import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  

  
  displayReviews = () => this.props.reviews.map((review) => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)

  

  render() {
    console.log(this.props.reviews)
    return (
      <ul>
        Reviews
        {this.displayReviews()}
      </ul>
    );
  }
};

export default Reviews;