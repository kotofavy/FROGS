import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Alert, AsyncStorage } from 'react-native';
import { Icon } from "react-native-elements"

export default class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reload:""
        }
    }

   async _eraseData() {
        try{
            var lists = await AsyncStorage.getItem('data');
            lists = JSON.parse(lists);
            const id = this.props.id
            var filtered = lists.filter(function(item){
                return (item.id !== id )
            })
            console.log(filtered)
            await AsyncStorage.setItem('data', JSON.stringify(filtered));
            this.setState({reload: "oui"})
        }catch(err){
            console.log(err)
        }
    }

    _delete(){
        return(
            Alert.alert("",
                'Voullez vous vraiment supprimer cette personne',
                [   
                    {text: "Annuler"},
                    {text: 'Confirmer', onPress: () => this._eraseData()}
                ],
            )
        )
        //this.props.route.navigation.navigate('AddFriend')
    }

    render() {
        return (
            < View style={styles.btn}>
                <TouchableOpacity onPress={this._delete} style={styles.each_btn}>
                    <Icon name="edit" size={15} reverse color="#3F77AE" /><Text style={{ alignSelf: "center" }}>Modifier</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._delete()} style={styles.each_btn}>
                    <Icon name="delete" size={15} reverse color="#E31D1D" /><Text style={{ alignSelf: "center" }}>Supprimer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: "row",
    },
    each_btn: {
        padding: 15
    }
})