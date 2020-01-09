import React from "react";
import { View, Text, StyleSheet, TextInput, AsyncStorage } from "react-native";
import Constants from 'expo-constants';
import shuffle from "shuffle-array";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FormLabel, FormInput, FormValidationMessage, Input, Button, Icon } from "react-native-elements";
import { Dropdown } from 'react-native-material-dropdown';



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
    }
  }

  async componentDidMount() {
    try {
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
        <Input placeholder="Pseudo..." onChangeText={this.inputhandler('Pseudo')} label='Pseudo' errorMessage="Pseudo Trop court"/>
        <Input placeholder="Nom..." onChangeText={this.inputhandler('Nom')} label="Nom"/>
        <Input placeholder="Prenom..." onChangeText={this.inputhandler('Prenom')} label="Prenom"/><Text style={{paddingLeft: 10, fontWeight:"bold", fontSize:16, color: "#889098"}}>Catégorie</Text>
        <Dropdown data = {[{value: "Friends/Family"},{value:"Recreation"},{value:"Organisation"},{value:"Geographics"},{value:"Socials"}]}  onChangeText={this.inputhandler('Cat')}/>
        <Input placeholder="n° Tél..." onChangeText={this.inputhandler('Tel')} label="Numéro Téléphone"/>
        <View style={{ paddingTop: 10, flexDirection: "row" }}>
          <View style={{ width: "50%", paddingRight: 5, paddingRight: 5, alignItems: "center" }}>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={()=> this.props.navigation.navigate('Home')}>
              <Text>Annuler</Text><Icon name="cancel" reverse color="#F67A19"/>
            </TouchableOpacity>
          </View>
          <View style={{ width: "50%", paddingRight: 5, paddingRight: 5, alignItems: "center" }}>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text>Ajouter</Text><Icon name="add" reverse color="#28E555" onPress={()=> this.ValidHandler()}/>
            </TouchableOpacity>
          </View>
        </View>
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

/* <ScrollView>
          <View >
            <TextInput style={styles.input} placeholder="pseudo" onChangeText={this.inputhandler('Pseudo')} />
            <TextInput style={styles.input} placeholder="Nom" onChangeText={this.inputhandler('Nom')} />
            <TextInput style={styles.input} placeholder="Prénom" onChangeText={this.inputhandler('Prenom')} />
            <TextInput style={styles.input} placeholder="catégorie" onChangeText={this.inputhandler('Cat')} />
            <TextInput style={styles.input} placeholder="n° Tel..." onChangeText={this.inputhandler('Tel')} />
            <View style={{ flexDirection: "row" }}>
              <View style={styles.container2}>
                <Button
                  title="Annuler"
                  onPress={() => this.ValidHandler()}
                  color="#E56728"
                />
            </View>
              <View style={styles.container2}>
                <Button
                color="#28E555"
                  style={{ width: "50%" }}
                  title="Ajouter"
                  onPress={() => this.ValidHandler()}
                />
              </View>
            </View>
          </View>
        </ScrollView> */