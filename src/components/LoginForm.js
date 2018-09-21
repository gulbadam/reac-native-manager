import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {
  emailChanged, passwordChanged, loginUser} from '../actions';
import {
  Card,
  CardSection,
  Button,
  Input,
  Spinner
} from './common'
import t from 'tcomb-form-native'; // 0.6.16

// // Form
// const Form = t.form.Form;

// // Form model
// const User = t.struct({
//   email: t.String,
//   password: t.String,
// });
// const  options = {
//   auto: 'placeholders',
//    fields: {
//        password: {
//          secureTextEntry: true}
//        }
// };

// const mapStateToProps = state => {
//   return {
//     value: state.loginChanged.value,
//   };
// };
 class LoginForm extends Component {
  //  onChange(text) {
  //    this.props.loginChanged(text);
  //  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    console.log("presed")
    const {
      email,
      password
    } = this.props;

    this.props.loginUser({
      email,
      password
    });
    console.log("presed")
  }


  // handleSubmit() {
  //   const value = this._form.getValue();
  //   if (value) {
  //     this.props.loginChanged();
  //   }
  //   console.log(this.loginform);
  // }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
renderError() {
  if (this.props.error) {
    return (
      <View>
      <Text style = {
        styles.errorTextStyle} >
      {this.props.error}
      </Text>
      </View>
    )
    
  }
}
 
  
  render() {
    return (
       <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
        {this.renderError()}
        </CardSection>
         <CardSection>
          {this.renderButton()}
        </CardSection>
        

       
      </Card>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',

   
  }
};

const mapStateToProps = ({
  auth
}) => {
  const {
    email,
    password,
    error,
    loading
  } = auth;

  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);