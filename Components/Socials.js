import React from "react";
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ListPerson from './ListPerson';
import Buttons_Static from './Buttons_static';

class Page6 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.container}>
                <ScrollView>
                    <ListPerson category="Socials" route={this.props}/>
                </ScrollView>
                    <Buttons_Static route={this.props}/>
            </View>
        )
    }
}

export default Page6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingMenuButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35
    }
})