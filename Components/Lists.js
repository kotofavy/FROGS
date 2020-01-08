import React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

export default class Lists extends React.Component{

    render(){
        return(
            <View style={styles.container}>
            <TextInput placeholder="search..." style={styles.input}/>
                <TouchableOpacity>
                    <View style={styles.texts}>
                    <Text style={styles.text}>{}</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}></Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    text:{
        padding: 5
    },
    texts: {
        height: "90%"
    },
})