import React from "react";
import { View, Text, StyleSheet, Button, TextInput, AsyncStorage } from "react-native";
import Constants from 'expo-constants';
import shuffle from "shuffle-array";


console.log("tafiditra page 1");
class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Pseudo: "",
      Nom: "",
      Prenom: '',
      Cat: "",
      Tel: "",
      Tab: [],
    }
  }

  async componentDidMount() {
    try {
      var Item =  await AsyncStorage.getItem('data');
      if(Item){
        data = JSON.parse(Item)
      }else if(Item === null){
        await AsyncStorage.setItem('data',"[]");
      }
    }catch(error){
      console.log(error)
    }
  }

  inputhandler = key => val => {
    if (key === "Nom") {
      this.setState({ [key]: val })
    } else if (key === "Prenom") {
      this.setState({ [key]: val })
    } else if (key === "Cat") {
      this.setState({ [key]: val })
    } else if (key === "Tel") {
      this.setState({ [key]: val })
    }else if (key === "Pseudo") {
      this.setState({ [key]: val })
    }
  };

  _storeData = async (Person_Data) => {

    try {
      data.push(Person_Data);
      await AsyncStorage.setItem('data', JSON.stringify(data));
      const Final_data = JSON.parse(await AsyncStorage.getItem('data'))
      console.log(Final_data)
    } catch (error) {
      console.log(error)
    }
  }

  ID_Generator = () => {
    var str = this.state.Pseudo.concat(this.state.Nom.concat(this.state.Prenom), this.state.Cat);
    str = str + Math.floor(Math.random() * 100000).toString();
    str = str.split("");
    str = shuffle(str);
    str = str.toString();
    var ctr = str.length
    while (ctr > 0) {
      str = str.replace(',', '');
      ctr--;
    }
    return str;
  }

  ValidHandler() {
    const Person_Data = {
      id: this.ID_Generator(),
      Pseudo: this.state.Pseudo,
      Nom: this.state.Nom,
      Prenom: this.state.Prenom,
      Catégorie: this.state.Cat,
      Tél: this.state.Tel
    }

    this._storeData(Person_Data);
    this.props.navigation.navigate("Page2")
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="pseudo" onChangeText={this.inputhandler('Pseudo')} />
        <TextInput placeholder="Nom" onChangeText={this.inputhandler('Nom')} />
        <TextInput placeholder="Prénom" onChangeText={this.inputhandler('Prenom')} />
        <TextInput placeholder="catégorie" onChangeText={this.inputhandler('Cat')} />
        <TextInput placeholder="n° Tel..." onChangeText={this.inputhandler('Tel')} />
        <Button
          title="Ajouter"
          onPress={() => this.ValidHandler()}
        />
      </View>
    );
  }
}

var data = [];
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Page1;

/*<View style={{ flexDirection: "row" }}>
  <FlatList
    data={[{ key: "Timon" }, { key: "Simon" }]}
    renderItem={({ item }) => (
      <View style={{ flexDirection: "row" }}>
        <Text>{item.key}</Text>
        <Button title="modifier" />
        <Button title="Supprimer" />
      </View>
    )}
  />
</View>;*/
