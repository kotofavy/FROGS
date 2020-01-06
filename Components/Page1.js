import React from "react";
import {View, Text, StyleSheet, Button, AsyncStorage, FlatList, TextInput} from 'react-native';
import {Lis} from 'react-native-elements';

console.log("tafiditra page 1")
class Page1 extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder="teste"/>
                <View style={{flexDirection: "row"}}>
                    <FlatList
                        data = {[
                            {key: 'Timon'},
                            {key: 'Simon'}
                        ]}
                    renderItem={({item}) => 
                    <View style={{flexDirection: "row"}}>
                        <Text>{item.key}</Text>
                        <Button title='modifier'/>
                        <Button title='Supprimer'/>
                    </View>
                }
                    />
                </View>
                <Button title="Suivant" 
                        onPress={()=> this.props.navigation.navigate('Page2')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Page1;

