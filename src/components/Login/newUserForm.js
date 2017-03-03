import React, { Component } from 'react';
import { TouchableOpacity, TextInput, Image, View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { RadioButton } from 'react-native-material-ui';

export default class NewUserForm extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.label}>E-mail</Text>
        <TextInput 
          style={styles.input}
          placeholder="E-mail" 
          underlineColorAndroid="transparent" 
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}/>
        <RadioButton
          label="Unchecked"
          value={1}
        />
        <RadioButton
          label="Unchecked"
          value={2}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input}
          placeholder="Password" 
          underlineColorAndroid="transparent" 
          returnKeyType="next"
          secureTextEntry 
          onSubmitEditing={() => this.passwordConfirmInput.focus()}
          ref={(input) => this.passwordInput = input}/>
        <Text style={styles.label}>Confirm password</Text>
        <TextInput 
          style={styles.input}
          placeholder="Password" 
          underlineColorAndroid="transparent" 
          returnKeyType="go" 
          secureTextEntry 
          ref={(input) => this.passwordConfirmInput = input}/>
        <TouchableOpacity style={styles.buttonContainer}
          onPress={Actions.instructor}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e3a3d',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40
  },
  regularLoginContainer: {
    marginTop: 20,
    paddingTop: 15,
    borderStyle: 'solid',
    borderTopColor: 'gray',
    borderTopWidth: 1
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
    marginBottom: 20,
    marginTop: 10
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
  label: {
    fontSize: 20,
    color: '#cccccc',
    marginBottom: 5 
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
  }

});

