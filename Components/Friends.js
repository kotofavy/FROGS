import React from "react";
import { View, Text, Button, AsyncStorage, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ListPerson from './ListPerson';
import { Icon } from "react-native-elements";
import Buttons_Static from './Buttons_static';

var ListFriends = [];
class Page2 extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ListPerson category="Friends" route={this.props}/>
        </ScrollView>
        <Buttons_Static route={this.props} category="F"/>
      </View>
    )
  }
}

export default Page2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35
  }
});