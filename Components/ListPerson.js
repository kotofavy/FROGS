import React from "react";
import { View, SectionList, Text } from "react-native";
import Lists from "./Lists";

export default class ListPerson extends React.Component{

    render(){
        const renderItem = obj => (
            <Lists
                Pseudo={}
                Nom={}
                Premon={}
                Category={}
                Tel={}
            />
        )
        return(
            <View>
                <SectionList
                    sections = {}
                />
            </View>
        )
    }
}