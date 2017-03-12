import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { Actions } from 'react-native-router-flux'
import LoginForm from './components/loginForm'
import { doRequestLogin } from '../../../../ducks/login'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e3a3d',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    flexGrow: 1,
  },
  buttonGroup: {
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 40
  },
  textContainer: {
    paddingVertical: 5
  },
  text: {
    fontSize: 16,
    color: '#cccccc'
  },
})

class Login extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../../imgs/fitr_logo.png')}/>
        </View>
        <View style={styles.formContainer}>
          <LoginForm 
            form="login"
            onLogin={this.props.doRequestLogin}
            password={this.props.password}
            email={this.props.email}
          />

        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.textContainer}
            onPress={Actions.register}
          >
            <Text style={styles.text}>Not a member?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


Login.propTypes = {
  updateLoginField: React.PropTypes.func,
  doRequestLogin: React.PropTypes.func,
}


const selector = formValueSelector('login');

const mapStateToProps = function(state){
  return {
    email: selector(state, 'email'),
    password: selector(state, 'password'),
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    doRequestLogin,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
