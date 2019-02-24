import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props
    return (
      <div key={review.id}>
        <li>
          {review.text}
        </li>
        <button onClick={(event) => {
          event.preventDefault()
          this.props.delete(review.id)
        }}> X </button>
      </div>
    );
  }

};

export default Review;
