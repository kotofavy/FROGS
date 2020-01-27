import React from "react";
import { View, SectionList, Text, AsyncStorage, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Lists from "./Lists";
import Constants from 'expo-constants';

export default class ListPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            affichage: false
        }
    }

    async componentDidMount() {
        try {
            var lists = await AsyncStorage.getItem('data');
            lists = JSON.parse(lists);
            var list_length = lists.length;
            if (list_length === 0) {
                this.setState({ affichage: true })
            }
            else if (list_length > 0) {
                if (this.props.category === "Friends") {
                    while (list_length > 0) {
                        if (lists[list_length - 1].Catégorie === "Friends/Family") {
                            List_Person = [...List_Person, lists[list_length - 1]];
                        }
                        list_length--;
                    }
                    this.setState({ data: List_Person })
                }
                else if (this.props.category === "Recreations") {
                    List_Person = [];
                    while (list_length > 0) {
                        if (lists[list_length - 1].Catégorie === "Recreations") {
                            List_Person = [...List_Person, lists[list_length - 1]];
                        }
                        list_length--;
                    }
                    this.setState({ data: List_Person })
                }
                else if (this.props.category === "Organisations") {
                    List_Person = [];
                    while (list_length > 0) {
                        if (lists[list_length - 1].Catégorie === "Organisations") {
                            List_Person = [...List_Person, lists[list_length - 1]];
                        }
                        list_length--;
                    }
                    this.setState({ data: List_Person })
                }
                else if (this.props.category === "Geographics") {
                    List_Person = [];
                    while (list_length > 0) {
                        if (lists[list_length - 1].Catégorie === "Geographics") {
                            List_Person = [...List_Person, lists[list_length - 1]];
                        }
                        list_length--;
                    }
                    this.setState({ data: List_Person })
                }
                else if (this.props.category === "Socials") {
                    List_Person = [];
                    while (list_length > 0) {
                        if (lists[list_length - 1].Catégorie === "Socials") {
                            List_Person = [...List_Person, lists[list_length - 1]];
                        }
                        list_length--;
                    }
                    this.setState({ data: List_Person })
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                {this.state.affichage ? <Text style={styles.Text}>Aucun Liste</Text> : this.state.data.map((item) => (
                    <Lists Pseudo={item.Pseudo}
                        id={item.id}
                        Nom={item.Nom}
                        Prenom={item.Prenom}
                        Category={item.Catégorie}
                        Tel={item.Tél}
                        Apt={item.Apt}
                        Rel={item.Rel}
                        Moy={item.Moy}
                        email={item.email}
                        route={this.props.route}
                    />
                ))}
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    title: {
        fontSize: 24,
    },
    Text: {
        paddingTop: Constants.statusBarHeight,
    }
})
var List_Person = [];