import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  matchingReviews = () => {
    return this.props.reviews.filter((review) => review.restaurantId === this.props.restaurantId)
  }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews reviews={this.matchingReviews()} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
} 


const mapStateToProps = state => {
  return { 
    reviews: state.reviews
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    addReview: (text) => {
      dispatch({ type: "ADD_REVIEW", review: {text, restaurantId: ownProps.restaurantId}})
    },
    deleteReview: (id) => {
      dispatch({ type: "DELETE_REVIEW", id })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer)
