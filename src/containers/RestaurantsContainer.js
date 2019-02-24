import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => {
  return {restaurants: restaurants}
}

const mapDispactToProps = (dispatch) => {
  return {
    addRestaurant: restaurant => dispatch({type: "ADD_RESTAURANT", restaurant}),
    deleteRestaurant: restID => dispatch({type: "DELETE_RESTAURANT", restID})
  }
}

export default connect(mapStateToProps, mapDispactToProps)(RestaurantsContainer)
