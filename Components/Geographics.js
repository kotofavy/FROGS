import React from "react";
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Icon} from "react-native-elements"
import ListPerson from './ListPerson';
import Buttons_Static from './Buttons_static';

class Page5 extends React.Component {
    constructor(props){
        super(props)
      }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListPerson category="Geographics" route={this.props}/>
                </ScrollView>
                <Buttons_Static route={this.props}/>
            </View>
        )
    }
}

export default Page5;

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