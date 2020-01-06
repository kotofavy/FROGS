import React from "react";
import {View, Text, Button} from 'react-native';

class Page4 extends React.Component {
    render(){
        return(
            <View>
                <Text>Page4</Text>
                <Button title="Suivant" 
                        onPress={()=> this.props.navigation.navigate('Page5')}/>
            </View>
        )
    }
}

export default Page4;