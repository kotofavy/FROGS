import React from "react";
import {View, Text, Button} from 'react-native';
import ListPerson from './ListPerson';

class Page6 extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
            <ListPerson category ="Socials"/>
                <Text>Socials</Text>
            </View>
        )
    }
}

export default Page6;