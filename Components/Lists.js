import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class Lists extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        {console.log("this.props.Nom")
        console.log(this.props.Nom)}
        return (

<>
                
                    <Text style={styles.text}>{this.props.Pseudo}</Text>
                        <Text>{this.props.Nom}</Text>
                        <Text>{this.props.Prenom}</Text>
                        <Text>{this.props.Category}</Text>
                        <Text>{this.props.Tel}</Text>
</>

        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5,

    },
    text: {
        padding: 5
    },
    texts: {
        height: "90%"
    },
})