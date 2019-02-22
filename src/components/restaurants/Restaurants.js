// import React, { Component } from 'react';
// import Restaurant from './Restaurant'

// class Restaurants extends Component {

// render() {
//     const restaurants = this.props.restaurants.map(restaurant => {
//     return (
//     <Restaurant key={restaurant.id} 
//     restaurant={restaurant} 
//     deleteRestaurant={props.deleteRestaurant}/> 
//     )
//   });

//     return(
//       <ul>
//         {restaurants}
//       </ul>
//     );
//   }
// };

// Restaurants.defaultProps = {
//   restaurants: []
// }

// export default Restaurants;


import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
        />
      )
    });

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;