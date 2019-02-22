import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';


class ReviewsContainer extends Component {

  filterReviews = () => {
    return this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurantId)
  }
  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews reviews={this.filterReviews()} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: revInfo => dispatch({ type: "ADD_REVIEW", revInfo }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
