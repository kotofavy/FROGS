import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddPerson from './Components/AddPerson';
import Friends from './Components/Friends';
import Recreation from './Components/Recreation';
import Organisation from './Components/Organisation';
import Geographics from './Components/Geographics';
import Socials from './Components/Socials';
import Home from './Components/Home';
import Lists from "./Components/Lists";
import ListPerson from './Components/ListPerson';

const MainNav = createStackNavigator({
        Home: {
                screen: Home,
                navigationOptions: ({ navigation }) => ({
                        title: "Home"
                })
        },
        AddFriend: {
                screen: AddPerson,
                navigationOptions: ({ navigation }) => ({
                        title: "Ajouter Personne"
                })
        },
        Friends: {
                screen: Friends,
                navigationOptions: ({ navigation }) => ({
                        title: "Friends"
                })
        },
        Recreations: {
                screen: Recreation,
                navigationOptions: ({ navigation }) => ({
                        title: "Recreations"
                })
        },
        Organisations: {
                screen: Organisation,
                navigationOptions: ({ navigation }) => ({
                        title: "Organisation"
                })
        },
        Geographics: {
                screen: Geographics,
                navigationOptions: ({ navigation }) => ({
                        title: "Geographics"
                })
        },
        Socials: {
                screen: Socials,
                navigationOptions: ({ navigation }) => ({
                        title: "Socials"
                })
        },
        Lists: {
                screen: Lists
        },
        ListPerson:{
                screen: ListPerson
        }
});

const APP = createAppContainer(MainNav);

export default APP;