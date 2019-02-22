import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews , restaurantId , deleteReview} = this.props;
    const allReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const reviewList = allReviews.map((review , index) =>
    {return <Review key={index} review = {review} deleteReview={deleteReview} />}
    )

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
