import React from "react";
import { View, Text, StyleSheet, TextInput, AsyncStorage } from "react-native";
import Constants from 'expo-constants';
import shuffle from "shuffle-array";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FormLabel, FormInput, FormValidationMessage, Input, Button, Icon } from "react-native-elements";
import { Dropdown } from 'react-native-material-dropdown';
import NumericInput from "react-native-numeric-input"
class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Pseudo: "",
      Nom: "",
      Prenom: '',
      Cat: "",
      Tel: "",
      Apt: 0,
      Rel: 0,
      Moy: 0,
      email:""
    }
  }

  async componentDidMount() {
    try {
      //await AsyncStorage.removeItem('data')
      var Item = await AsyncStorage.getItem('data');
      if (Item) {
        data = JSON.parse(Item)
      } else if (Item === null) {
        await AsyncStorage.setItem('data', "[]");
      }
    } catch (error) {
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
    } else if (key === "Pseudo") {
      this.setState({ [key]: val })
    }
  };

  _storeData = async (Person_Data) => {

    try {
      data.push(Person_Data);
      await AsyncStorage.setItem('data', JSON.stringify(data));
      const Final_data = JSON.parse(await AsyncStorage.getItem('data'))
    } catch (error) {
      console.log(error)
    }
  }

  ID_Generator = () => {
    var id = Math.floor(Math.random() * 1000000000000000);
    return id;
  }

  ValidHandler() {
    const Person_Data = {
      id: this.ID_Generator(),
      Pseudo: this.state.Pseudo,
      Nom: this.state.Nom,
      Prenom: this.state.Prenom,
      Catégorie: this.state.Cat,
      Tél: this.state.Tel,
      Apt: this.state.Apt,
      Rel: this.state.Rel,
      Moy: this.state.Moy,
      email: this.state.email
    }

    this._storeData(Person_Data);
    this.props.navigation.navigate("Home")
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Input placeholder="Pseudo..." onChangeText={this.inputhandler('Pseudo')} label='Pseudo' errorMessage="Pseudo Trop court" />
          <Input placeholder="Nom..." onChangeText={this.inputhandler('Nom')} label="Nom" />
          <Input placeholder="Prenom..." onChangeText={this.inputhandler('Prenom')} label="Prenom" /><Text style={{ paddingLeft: 10, fontWeight: "bold", fontSize: 16, color: "#889098" }}>Catégorie</Text>
          <Dropdown data={[{ value: "Friends/Family" }, { value: "Recreations" }, { value: "Organisations" }, { value: "Geographics" }, { value: "Socials" }]} onChangeText={this.inputhandler('Cat')} />
          <Input placeholder="numero téléphone" onChangeText={this.inputhandler('Tel')} label="n° Tél" />
          <Input placeholder="e-mail..." onChangeText={this.inputhandler('email')} label="n° Tél" label="email"/>
          <View style={{ flexDirection: "row",paddingTop: 10, PaddingBottom: 5 }}>
            <View style={{ width: "33%", paddingRight: 5, paddingRight: 5, alignItems: "center" }}>
              <NumericInput type="up-down" minValue = {0} maxValue = {10} onChange = {(value) => {this.setState({Apt: value}); this.setState({Moy: (this.state.Apt+this.state.Rel)/2})}}/><Text>Aptitude</Text>
            </View>
            <View style={{ width: "33%", paddingRight: 5, paddingRight: 5, alignItems: "center" }}>
            <NumericInput type="up-down" minValue = {0} maxValue = {10} onChange={(value) => {this.setState({Rel: value}); this.setState({Moy: (this.state.Apt+this.state.Rel)/2})}}/><Text>Relation</Text>
            </View>
            <View style={{ width: "34%", paddingRight: 5, paddingRight: 5, alignItems: "center" }}>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>{(this.state.Rel + this.state.Apt)/2}</Text><Text>Moyenne</Text>
            </View>
          </View>
          <View style={{ paddingTop: 10, flexDirection: "row", PaddingBottom: 20 }}>
            <View style={{ width: "50%", paddingRight: 5, paddingRight: 5, alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.props.navigation.navigate('Home')}>
                <Icon name="cancel" reverse color="#F67A19" /><Text>Annuler</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "50%", paddingRight: 5, paddingRight: 5, alignItems: "center" }}>
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Icon name="add" reverse color="#28E555" onPress={() => this.ValidHandler()} /><Text>Ajouter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  },
  input: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,

  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%"
  },
});

export default Page1;