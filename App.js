import React from 'react';

import FlashMessage from "react-native-flash-message";

import Navigation from './navigation/Navigator';
import CurrentScreen from './containers/CurrentScreen';
import store from './store/store';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <FlashMessage position="top" />
    </Provider>
  );
}

