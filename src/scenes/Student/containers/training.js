import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Exercise from '../components/exercise'

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

class Training extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center'}}> 
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.finish}>Começar treino</Text>
          </TouchableOpacity>
        </View>

        <Exercise />
      </View>
    )
  }
}

const mapStateToProps = function(state){
  return {
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Training)

