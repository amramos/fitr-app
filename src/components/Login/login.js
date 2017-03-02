import React, { Component } from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import LoginForm from './loginForm';
import {connect} from 'react-redux';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../imgs/fitr_logo.png')}/>
        </View>

        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e3a3d'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  formContainer: {
    flexGrow: 1
  }
});

const mapStateToProps = (state) => {
  return state;
}

export default connect(
  mapStateToProps
)(Login);
