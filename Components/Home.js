import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Constants from 'expo-constants';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.HomeText}><Icon name="info"></Icon><Text style={{ fontWeight: 'bold' }}>constitution d'une liste suivant la méthode FROGS</Text></View>
                    <View style={styles.container1}>
                        <View style={styles.container2}><Text>FRIENDS & FAMILY</Text><Icon raised name='people' color="green" size={50} transparent reverse onPress={() => this.props.navigation.navigate("Friends", { Category: "Friends" })} /></View>
                        <View style={styles.container2}><Text>RECREATION</Text><Icon raised name='work' color="#6AB8F0" size={50} transparent reverse onPress={() => this.props.navigation.navigate("Recreations", { Category: "Recreations" })} /></View>
                    </View>
                    <View style={styles.container1}>
                        <View style={styles.container2}><Text>ORGANISATION</Text><Icon raised name='streetview' color="#B81DED" size={50} transparent reverse onPress={() => this.props.navigation.navigate("Organisations", { Category: "Organisations" })} /></View>
                        <View style={styles.container2}><Text>GEOGRAPHICS</Text><Icon reverse name='terrain' color="#1DED9A" size={50} transparent reverse onPress={() => this.props.navigation.navigate("Geographics", { Category: "Geographics" })} /></View>
                    </View>
                    <View style={styles.container1}>
                        <View style={styles.container2}><Text>SOCIALS</Text><Icon raised name='star' color="#F09F6A" size={50} transparent reverse onPress={() => this.props.navigation.navigate("Socials", { Category: "Socials" })} /></View>
                    </View>
                    <Button onPress={() => this.props.navigation.navigate("AddFriend")} title="add" />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
    },
    container1: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 175
    },
    container2: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%"
    },
    HomeText: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 50,

    },
});