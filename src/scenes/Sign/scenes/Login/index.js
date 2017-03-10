import React, { Component } from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import LoginForm from './components/loginForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateLoginField, requestLogin } from '../../actions/actions';
import { Alert } from 'react-native';

class Login extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../imgs/fitr_logo.png')}/>
        </View>

        <View style={styles.formContainer}>
          <LoginForm 
            onFieldUpdate={this.props.updateLoginField}
            onLogin={this.props.requestLogin}
            password={this.props.login.password}
            email={this.props.login.email}
          />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestLogin,
    updateLoginField
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
