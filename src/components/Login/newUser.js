import React, { Component } from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import NewUserForm from './newUserForm';
import {connect} from 'react-redux';
import { Toolbar } from 'react-native-material-ui';
import {Actions} from 'react-native-router-flux';

class NewUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={Actions.pop}
          centerElement={'New member'}
        />
        <NewUserForm/>
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
)(NewUser);
