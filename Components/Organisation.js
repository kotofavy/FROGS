import React from "react";
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ListPerson from './ListPerson';
import {Icon} from "react-native-elements";
import Buttons_Static from './Buttons_static';

class Page4 extends React.Component {
    constructor(props){
        super(props)
      }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <ListPerson category="Organisations" route={this.props}/>
                </ScrollView>
                <Buttons_Static route={this.props}/>
            </View>
        )
    }
}

export default Page4;

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