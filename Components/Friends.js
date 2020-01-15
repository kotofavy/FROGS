import React from "react";
import { View, Text, Button, AsyncStorage, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ListPerson from './ListPerson';
var ListFriends = [];
class Page2 extends React.Component {

  render() {
    return (
      <View style = {styles.container}>
        <ListPerson category="Friends" />
        <Button title="Suivant"
          onPress={() => this.props.navigation.navigate('Recreations')} />
      </View>
    )
  }
}

export default Page2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});