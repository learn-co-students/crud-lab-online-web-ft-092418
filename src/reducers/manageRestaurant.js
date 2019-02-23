
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const r = {
                id: cuidFn(),
                text: action.text
            }
            return { ...state, restaurants: [...state.restaurants, r]}

        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return { ...state, restaurants}

        case 'ADD_REVIEW':
            const rev = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
            return { ...state,
              reviews: [...state.reviews, rev]
            }
      
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }

        default:
            return state
    }
}
