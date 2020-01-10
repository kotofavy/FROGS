import React from "react";
import { View, Text, Button, AsyncStorage, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ListPerson from './ListPerson';
var ListFriends = [];
class Page2 extends React.Component {

    async componentDidMount() {
        var lists = await AsyncStorage.getItem('data');
        lists = JSON.parse(lists);
        var data_length = lists.length;
        
        console.log(lists[data_length-1]);
        while(data_length > 0){
            data_length--;
            if(lists[data_length].Catégorie === "Friends/Family"){
                ListFriends.push({Pseudo: lists[data_length].Pseudo, Nom: lists[data_length].Nom, Premon: lists[data_length].Prenom, Tel: lists[data_length].Tél});
                console.log(ListFriends)
            }
        }
        
    }

    render() {
        return (
            <SafeAreaView>
                <Button title="Suivant"
                    onPress={() => this.props.navigation.navigate('Page3')} />
            </SafeAreaView>
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