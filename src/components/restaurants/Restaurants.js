import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props
    const resList = restaurants.map(restaurant => {
      return (
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />
      )
    });

    return(
      <ul>
        {resList}
      </ul>
    );
  }
};

export default Restaurants;