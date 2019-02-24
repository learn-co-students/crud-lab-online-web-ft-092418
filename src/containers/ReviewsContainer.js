import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  //const filterCallback = (rev) => (this.props.restaurant.id === rev.restId)

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restId={this.props.restaurant.id}/>
        <Reviews delete={this.props.deleteReview} reviews={this.props.reviews.filter(rev => rev.restId === this.props.restaurant.id)}/>
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => {
  return {reviews: reviews}
}

const mapDispactToProps = (dispatch) => {
  return {
    addReview: (review, restId) => dispatch({type: "ADD_REVIEW", review, restId}),
    deleteReview: reviewId => dispatch({type: "DELETE_REVIEW", reviewId})
  }
}

export default connect(mapStateToProps, mapDispactToProps)(ReviewsContainer)
