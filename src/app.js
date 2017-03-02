import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './store/store';

import Login from './components/Login/login';
import Instructor from './components/Instructor/instructor';

const RouterWithRedux = connect()(Router);

console.log(Router);
console.log(Login);
export default class App extends Component {
  render() {
    return ( 
    <Provider store={store}>
      <RouterWithRedux>
        <Scene key="login" component={Login} title="Login page" hideNavBar={() => true } initial={true}/>
        <Scene key="instructor" component={Instructor} title="Instructor page" hideNavBar={() => true } type="replace">
        </Scene>

      </RouterWithRedux>
    </Provider>
  )
  }
}
