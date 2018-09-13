/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
store = createStore(reducers)

type Props = {};
export default class App extends Component<Props> {
  componentWillMount = () => {
    const  config = {
      apiKey: 'AIzaSyA-8TP2RT4pTWcA3N-sQdMl7d_VRRPIgOo',
      authDomain: 'manager-83d7b.firebaseapp.com',
      databaseURL: 'https://manager-83d7b.firebaseio.com',
      projectId: 'manager-83d7b',
      storageBucket: 'manager-83d7b.appspot.com',
      messagingSenderId: '412567920038'
    };
    firebase.initializeApp(config);
  };
  
  render() {
    return (
      <Provider store={store}>
    
      <LoginForm/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
