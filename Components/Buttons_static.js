import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';

export default class Buttons_static extends React.Component {
    render() {
        return (
            <>
                <TouchableOpacity style={styles.floatingMenuButtonStyle} onPress={() => this.props.route.navigation.navigate('AddFriend')}>
                    <Icon name="add" reverse color="#28E555" /><Text style={{ alignSelf: "center" }}>Ajouter</Text>
                </TouchableOpacity>
            </>
        )
    }
}

const styles = StyleSheet.create({
    floatingMenuButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35
    }
})