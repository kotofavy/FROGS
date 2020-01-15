import React from "react";
import {View, Text, Button} from 'react-native';
import ListPerson from './ListPerson';

class Page4 extends React.Component {
    render(){
        return(
            <View>
            <ListPerson category="Organisations"/>
                <Text>Page4</Text>
                <Button title="Suivant" 
                        onPress={()=> this.props.navigation.navigate('Geographics')}/>
            </View>
        )
    }
}

export default Page4;