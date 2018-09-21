import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
const Button = ({ onPress, children })=> {
//     const { buttonStyle, textStyle} = styles
 return (
//     <TouchableOpacity onPress={onPress} style= {buttonStyle}>
//     <Text style= {textStyle}>{children}</Text>
//     </TouchableOpacity>
// 
    <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{children}</Text></TouchableOpacity>
 );
 };
const styles = {
    button: {
        flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#cef',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginLeft: 5,
            marginRight: 5
        
    },
    buttonText: {
        alignSelf: 'center',
            color: '#007aff',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10
    }
};
export { Button };