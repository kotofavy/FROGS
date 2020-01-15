import React from "react";
import {View, Text, Button} from 'react-native';
import ListPerson from './ListPerson';

class Page3 extends React.Component {
    render(){
        return(
            <View>
                <ListPerson category="Recreations"/>
                <Button title="Suivant" 
                        onPress={()=> this.props.navigation.navigate('Organisations')}/>
            </View>
        )
    }
}

export default Page3;