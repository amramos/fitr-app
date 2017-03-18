import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around'
  
  },
  title: {
    fontSize: 24,
    marginBottom: 20

  },
  label: {
    fontSize: 16
  },
  image: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 75,
    height: 150,
    width: 150,
    marginBottom: 40
  },
  finish: {
    fontSize: 22,
    marginBottom: 40
  }
})

class Exercise extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.image}> 
          <Text>  </Text>
        </View>


        <View style={{flex: 1, alignItems: 'center'}}> 
          <Text style={styles.title}> Bench Press </Text>
          <Text style={styles.label}> 3 sets </Text>
          <Text style={styles.label}> 12 repetitions </Text>
          <Text style={styles.label}> 25kg </Text>
        </View>
        

        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.finish}>Finish</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Exercise 
