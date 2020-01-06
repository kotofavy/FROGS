import React from "react";
import {View, Text, Button} from 'react-native';

class Page3 extends React.Component {
    render(){
        return(
            <View>
                <Text>Page3</Text>
                <Button title="Suivant" 
                        onPress={()=> this.props.navigation.navigate('Page4')}/>
            </View>
        )
    }
}

export default Page3;