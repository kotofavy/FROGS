import React from "react";
import {View, Text, Button} from 'react-native';

console.log("page2")
class Page2 extends React.Component {
    render(){
        return(
            <View>
                <Text>Page2</Text>
                <Button title="Suivant" 
                        onPress={()=> this.props.navigation.navigate('Page3')}/>
            </View>
        )
    }
}

export default Page2;