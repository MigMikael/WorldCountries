/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './app/containers/Home'
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import configureStore from './app/redux/stores/configureStore'

const store = configureStore()

const One = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => One);
