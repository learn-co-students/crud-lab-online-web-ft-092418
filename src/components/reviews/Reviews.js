import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props
    const associatedRevs = reviews.filter(r => r.restaurantId === restaurantId)

    return (
      <ul>
        {associatedRevs.map((r, index) => < Review key={index} review={r} deleteReview={deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;