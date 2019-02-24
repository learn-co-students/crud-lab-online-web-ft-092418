import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {manageRestaurants} from './reducers/manageRestaurant'
import {manageReviews} from './reducers/manageRestaurant'
import { combineReducers } from "redux"

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
