import React, { Component } from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { Toolbar } from 'react-native-material-ui';
import {Actions} from 'react-native-router-flux';
import { formValueSelector } from 'redux-form'
import RegisterForm from './components/registerForm';
import { doRequestRegister } from '../../../../ducks/register'

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

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={Actions.pop}
          centerElement={'New member'}
        />
        <RegisterForm
          form="register" 
          onSignUp={this.props.doRequestRegister}
          email={this.props.email}
          password={this.props.password}
          confirmPassword={this.props.confirmPassword}
        />
      </View>
    )
  }
}

const selector = formValueSelector('register');

const mapStateToProps = (state) => {
  return {
    email: selector(state, 'email'),
    password: selector(state, 'password'),
    confirmPassword: selector(state, 'confirmPassword')
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    doRequestRegister,
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
