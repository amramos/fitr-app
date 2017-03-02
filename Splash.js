import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          FITR
        </Text>
        <Text style={styles.subtitle}>
          Your pocket gym
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white'
  }
});
