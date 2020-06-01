import React from 'react';

import Navigation from './navigation/Navigator';
import CurrentScreen from './containers/CurrentScreen';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// const rootReducer = combineReducers();

// const store = createStore(rootReducer);

// return (
//   <Provider store={store}>
//     <Navigation />
//   </Provider>
// );


export default function App() {
  return (
    <Navigation />
  );
}

