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
      Person_data: {}
    }
  }

  inputhandler = key => val => {
    if (key === "Nom") {
      this.setState({ [key]: val })
      console.log(this.state.Nom)
    } else if (key === "Prenom") {
      this.setState({ [key]: val })
      console.log(this.state.Prenom)
    } else if (key === "Cat") {
      this.setState({ [key]: val })
      console.log(this.state.Cat)
    } else if (key === "Tel") {
      this.setState({ [key]: val })
      console.log(this.state.Tel)
    }
    else if (key === "Pseudo") {
      this.setState({ [key]: val })
      console.log(this.state.Pseudo)
    }
  };
  _storeData = async (Person_Data) => {
    await AsyncStorage.removeItem('data');
    try {
      const tab = [];
      tab.push(Person_Data);
      //console.log(tab)
      let Item = await AsyncStorage.getItem('data');

      if (Item) {
        const Data = JSON.parse(Item);
        let Data_length = Data.length;
        while(Data_length >= 0){
          console.log("while")
          tab.push(Data[Data_length])
          Data_length--;
        }
        await AsyncStorage.setItem('data', JSON.stringify(tab));
        console.log(tab)
      } else if (!Item) {
        await AsyncStorage.setItem("data", JSON.stringify(tab))
      }
      let data = await AsyncStorage.getItem("data")
      data = JSON.parse(data);
      setTimeout(() => {
        console.log(data[0].Nom)
      }, 1000)
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
