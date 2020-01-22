import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import Buttons from './Buttons';

export default class Lists extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require('./images/photo-avatar-profil.png')}
                    title={this.props.Pseudo}
                />
                <CardTitle
                    title={this.props.Pseudo}
                />

                <CardContent text={(<Text><Text style={styles.Title}>Nom:</Text>{this.props.Nom}</Text>)} />
                <CardContent text={(<Text><Text style={styles.Title}>Prenom:</Text>{this.props.Prenom}</Text>)} />
                <CardContent text={(<Text><Text style={styles.Title}>Contact:</Text>{this.props.Tel}</Text>)} />
                <CardContent text={(<Text><Text style={styles.Title}>e-mail:</Text>{this.props.email}</Text>)} />
                <View style={{ flexDirection: "row" }}>
                    <CardContent text={(<Text><Text style={styles.Note}>Aptitude</Text><Text style={styles.Note_ind}>{this.props.Apt}</Text></Text>)} />
                    <CardContent text={(<Text><Text style={styles.Note}>Relation</Text><Text style={styles.Note_ind}>{this.props.Rel}</Text></Text>)} />
                    <CardContent text={(<Text><Text style={styles.Note}>Moyenne</Text><Text style={styles.Moy}>{this.props.Moy}</Text></Text>)} />
                </View>
                <Buttons route={this.props.route}
                    id = {this.props.id}
                />
                <CardAction
                    separator={true}
                    inColumn={false}>

                </CardAction>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,

    },
    text: {
        padding: 5,
        fontWeight: "bold"
    },
    texts: {
        height: "90%"
    },
    Title: {
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 15
    },
    Note: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#3F77AE"
    },
    Note_ind: {
        fontSize: 30,
        textAlign: "center"
    },
    Moy: {
        fontWeight: "bold",
        fontSize: 30,
    }
})

/* <Text style={styles.text}>{this.props.Pseudo}</Text>
                <Text>{this.props.Nom}</Text>
                <Text>{this.props.Prenom}</Text>
                <Text>{this.props.Category}</Text>
                <Text>{this.props.Tel}</Text> */