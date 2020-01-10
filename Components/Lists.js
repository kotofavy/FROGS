import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class Lists extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (

            <TouchableOpacity style={styles.container}>
                <View style={styles.texts}>
                    <Text style={styles.text}>{this.props.Pseudo}</Text>
                    <>
                        <Text>{this.props.Nom}</Text>
                        <Text>{this.props.Prenom}</Text>
                        <Text>{this.props.Category}</Text>
                        <Text>{this.props.Tel}</Text>
                    </>                    
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#005BEA"
    },
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