import React, { Component } from 'react';
import { View } from 'react-native';
const Card = (props)=> {
return (
    <View style = {styles.containerStyle}>
    {props.children}
    </View>
);
};
const styles = {
    containerStyle: {
      borderWidth: 1,
      borderRadius: 4, 
      borderColor: 'grey',
      //borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 4 },
      shadowOpacity: 0.7,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 100
    }

}
export { Card };
