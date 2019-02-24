
import cuid from 'cuid';

export const cuidFn = cuid;

 function manageRestaurants(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return [...state, {text: action.restaurant, id: cuid()}]

    case "DELETE_RESTAURANT":
      return state.filter(rest => rest.id !== action.restID)

    default:
    return state
  }
}

function manageReviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, {text: action.review, id: cuid(), restId: action.restId}]
    case 'DELETE_REVIEW':
      return state.filter(rev => rev.id !== action.reviewId)
    default:
    return state
  }
}

export{
  manageReviews, manageRestaurants
}
