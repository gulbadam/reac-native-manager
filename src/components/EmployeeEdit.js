import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import {employeeUpdate} from '../actions';
import { CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
    componentWillMount() {
      _.each(this.props.employee, (value, prop)=>{
        this.props.employeeUpdate({prop, value})  
      }) 
    }
    onButtonPress() {
        const {name, phone, shift} = this.props;
        console.log(name, phone, shift);
    }
    render() {
        return(
        <View>
        <EmployeeForm/>
        <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
       Save Changes
        </Button>
        </CardSection>
        </View>
        )
    }
}
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};
export default connect(mapStateToProps, {employeeUpdate})(EmployeeEdit);