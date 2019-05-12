import React, {Component} from 'react';
import {View ,Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from './components/LoginForm';




export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyBsaXqqEioMPhYrSdSrSd3mCwK0sUHUeAc",
    authDomain: "auth-e7ac5.firebaseapp.com",
    databaseURL: "https://auth-e7ac5.firebaseio.com",
    projectId: "auth-e7ac5",
    storageBucket: "auth-e7ac5.appspot.com",
    messagingSenderId: "846221714758"
    });
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View>
          <LoginForm/>
      </View>
      </Provider>
    );
  }
}