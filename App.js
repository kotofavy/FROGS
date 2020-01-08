import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Route from "./route";
import {Provider} from 'react-redux';
import store from './Redux/Store/store';

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Route/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
