import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
const Button = ({ onPress, children })=> {
//     const { buttonStyle, textStyle} = styles
 return (
//     <TouchableOpacity onPress={onPress} style= {buttonStyle}>
//     <Text style= {textStyle}>{children}</Text>
//     </TouchableOpacity>
// 
    <TouchableOpacity style={styles.button}
        title="Login"
        onPress={this.handleSubmit}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
 );
 };
const styles = {
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    }
};
export { Button };