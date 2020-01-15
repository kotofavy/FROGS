import React from "react";
import {View, Text, Button} from 'react-native';
import ListPerson from './ListPerson';

class Page5 extends React.Component {
    render(){
        return(
            <View>
            <ListPerson category="Geographics"/>
                <Text>Page5</Text>
                <Button title="suivant" onPress={()=> this.props.navigation.navigate('Socials')}/>
            </View>
        )
    }
}

export default Page5;