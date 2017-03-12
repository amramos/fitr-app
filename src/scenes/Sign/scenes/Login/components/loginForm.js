import React, { Component } from 'react'
import {TouchableOpacity, TextInput, Image, View, Text, StyleSheet} from 'react-native'
import {Field, reduxForm} from 'redux-form'
import FormTextInput from '../../../../../components/FormTextInput'

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40
  },
  input: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    backgroundColor: 'white',
    marginBottom: 10,
    color: 'gray'
  },
  facebookButtonContainer: {
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 5,
    marginBottom: 20
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  },
  textContainer: {
    paddingVertical: 5
  },
  text: {
    fontSize: 16,
    color: '#cccccc'
  },
  infoText: {
    fontSize: 16,
    color: '#cccccc',
    paddingBottom: 20,
    textAlign: 'center'
  },
  facebookImage: {
    height: 20,
    width: 20,
    top: 18,
    left: 15,
    position: 'absolute'
  },
  regularLoginContainer: {
    marginTop: 20,
    paddingTop: 15,
    borderStyle: 'solid',
    borderTopColor: 'gray',
    borderTopWidth: 1
  }

});

class LoginForm extends Component {

  render(){
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.facebookButtonContainer}>
          <Image style={styles.facebookImage} source={require('../../../../../imgs/facebook_f.png')}/>
          <Text style={styles.buttonText}>Login using Facebook</Text>
        </TouchableOpacity>


        <View style={styles.regularLoginContainer}>

          <Text style={styles.infoText}>
            Or using your e-mail account
          </Text>


          <Field 
            name="email" 
            placeholder="E-mail"
            component={FormTextInput}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          ></Field>
          <Field
            name="password"
            component={FormTextInput}
            placeholder="Password" 
            underlineColorAndroid="transparent" 
            returnKeyType="go" 
            value={this.props.password}
            secureTextEntry 
            ref={(input) => this.passwordInput = input}
          ></Field>

        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => this.props.onLogin(this.props.email, this.props.password)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
    }
}

export default reduxForm({})(LoginForm);
