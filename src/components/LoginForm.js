import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {loginChanged} from '../actions';
import {Card, CardSection, Button} from './common'
import t from 'tcomb-form-native'; // 0.6.16

// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
  email: t.String,
  password: t.String,
});
const  options = {
  auto: 'placeholders',
   fields: {
       password: {
         secureTextEntry: true}
       }
};

 class LoginForm extends Component {
  //  onChange(text) {
  //    this.props.loginChanged(text);
  //  }
  handleSubmit() {
    console.log(this.loginform);
  }
  
  render() {
    return (
      <Card>
    
      <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
        <Form ref={c => this.loginform = c} type={User}  options={options} value={this.props.value} onChange={this.onChange}/>
    <Button onPress={this.handleSubmit.bind(this)}/>
      </View>
     
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  loginText: {
    fontSize: 20,
    textAlign:'center',
    paddingBottom: 20,
    },
});
export default connect(null, {loginChanged})(LoginForm);