import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Page1 from './Components/AddPerson';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Home from './Components/Home';

const MainNav = createStackNavigator({
    Home: {screen: Home,
           navigationOptions: ({navigation}) => ({
                title: "Home"
           })
    },
    Page1: {screen: Page1,
            navigationOptions: ({navigation})=> ({
                title: "Friends"
            })},
    Page2: {screen: Page2,
            navigationOptions: ({navigation})=> ({
                title: "Recreations"
            })},
    Page3: {screen: Page3,
            navigationOptions: ({navigation})=> ({
            title: "Organisation"
            })
        },
    Page4: {screen: Page4,
            navigationOptions: ({navigation})=> ({
            title: "Geographics"
            })
    },
    Page5: {screen: Page5,
            navigationOptions: ({navigation})=> ({
            title: "Socials"
            })
    },
});

const APP = createAppContainer(MainNav);

export default APP;