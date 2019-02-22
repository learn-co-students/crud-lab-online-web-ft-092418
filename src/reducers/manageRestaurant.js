import cuid from 'cuid';
import { stat } from 'fs';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {    
    switch (action.type) {
        case "ADD_RESTAURANT":
            const newRest = {
                id: cuid(),
                text: action.text
            }
            return {...state, restaurants: [...state.restaurants, newRest]}
        case "DELETE_RESTAURANT":
            return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.id)}
        case "ADD_REVIEW":
            const newRev = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {...state, reviews: [...state.reviews, newRev]}
        case "DELETE_REVIEW":
            return {...state, reviews: state.reviews.filter(rev => rev.id !== action.id)}
        default: 
            return state
    }

}


