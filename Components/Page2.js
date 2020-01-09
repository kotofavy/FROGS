import React from "react";
import {View, Text, Button, AsyncStorage} from 'react-native';
var Friends_List = [];

console.log("page2")
class Page2 extends React.Component {

 getItem = async () => {
    var data = await AsyncStorage.getItem('data');
    data = JSON.parse(data)
    const data_length = data.length;
    while(data_length > 0){
        if(data[data_length].Catégorie === "Friends/Family"){
            
        }
    }

    return data
}
    render(){
        {this.getItem()}
        return(
            <View>
                
                <Button title="Suivant" 
                        onPress={()=> this.props.navigation.navigate('Page3')}/>
            </View>
        )
    }
}

export default Page2;