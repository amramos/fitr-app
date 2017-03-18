import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider, connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import store from './store/store'

import Login from './components/Login/login'
import {StyleSheet} from 'react-native'

import Sign from './scenes/Sign'
import Student from './scenes/Student'



const RouterWithRedux = connect()(Router)


//<Scene key="instructor" component={Instructor} title="Instructor page" hideNavBar={() => true } type="replace">

export default class App extends Component {
  render() {
    return ( 
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="login" component={Sign.Login} hideNavBar initial={true}/>
          <Scene key="register" component={Sign.Register} hideNavBar />
          <Scene key="student" component={Student} hideNavBar />
        </RouterWithRedux>
      </Provider>
    )
  }
}


/*
 *
          <Scene key="newUser" component={Sign.Register}  hideNavBar/>
 */
