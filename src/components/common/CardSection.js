import React, { Component } from 'react';
import { View } from 'react-native';
const CardSection = (props) => {
return (
  <View style = { [styles.containerStyle, props.style ] }>
  {props.children}
  </View>  
)
}
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#bcf',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}
export  { CardSection };