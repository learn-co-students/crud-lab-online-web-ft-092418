import { combineReducers } from "redux";
import cuid from 'cuid';
export const cuidFn = cuid;


const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
});


function manageRestaurants(state = [], action = {}) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRestaurant = {...action.text, id: cuid()}
      return [...state, newRestaurant]
    case "DELETE_RESTAURANT":
      return state.filter(rest => rest.id !== action.id)
    default:
      return state
  }
}

function manageReviews(state = [], action = {}) {
  switch (action.type) {
    case "ADD_REVIEW":
      const newRev = {...action.review, id: cuid()}
      return [...state, newRev]
      break;
    case "DELETE_REVIEW":
      return state.filter(rev => rev.id !== action.id)
    default:
      return state
  }
}

export default rootReducer
