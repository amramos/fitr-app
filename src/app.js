import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './store/store';

import Login from './components/Login/login';
import NewUser from './components/Login/newUser';
import Instructor from './components/Instructor/instructor';
import {StyleSheet} from 'react-native';

const RouterWithRedux = connect()(Router);

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'blue'
  }
});

export default class App extends Component {
  render() {
    return ( 
    <Provider store={store}>
      <RouterWithRedux>
        <Scene key="login" component={Login} title="Login page" hideNavBar initial={true}/>
        <Scene key="newUser" tabBarStyle={styles.tabBarStyle} component={NewUser} title="New member" hideNavBar/>
        <Scene key="instructor" component={Instructor} title="Instructor page" hideNavBar={() => true } type="replace">
        </Scene>

      </RouterWithRedux>
    </Provider>
  )
  }
}
