// import React, { Component } from 'react';
// import Review from './Review';

// class Reviews extends Component {
//   render() {
//     const reviews = this.props.reviews.map(review => {
//     return (
//     <Review key={review.id} 
//     review={review} 
//     deleteReview={props.deleteReview}/> 
//     )
//   });
//     return (
//       <ul>
//         {reviews}
//       </ul>
//     );
//   }
// };


// Reviews.defaultProps = {
//   reviews: []
// }

// export default Reviews;

import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;

