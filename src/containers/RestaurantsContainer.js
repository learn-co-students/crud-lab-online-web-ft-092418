import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import Restaurant from '../components/restaurants/Restaurant'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRestaurant: id => dispatch ({type: 'DELETE_RESTAURANT', id: id}),
  addReview: (reviewText, restaurantId) => dispatch({type: 'ADD_REVIEW', review:{text: reviewText, restaurantId}}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
