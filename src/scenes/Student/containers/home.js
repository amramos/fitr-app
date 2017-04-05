import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { doCheckin } from '../../../ducks/student'

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

class Home extends Component {
  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.textContainer}
          onPress={() => this.props.doCheckin(this.props.userId)}
        >
          <Text style={styles.finish}>Check-in</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = function(state){
  return {
    userId: state.auth.id,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ 
    doCheckin,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)

