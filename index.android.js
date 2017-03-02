/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './Splash';
import Login from './src/components/Login/login';
import { ThemeProvider } from 'react-native-material-ui';
import App from './src/app';



export default class fitr extends Component {
  render() {
    return (
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('fitr', () => fitr);
