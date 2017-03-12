import {StyleSheet, TextInput} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    backgroundColor: 'white',
    marginBottom: 10,
    color: 'gray'
  },
});

const formTextInput = ({ input: { onChange }, ...restInput }) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

export default formTextInput
