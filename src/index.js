//PAGES
import CadastroScreen from './pages/cadastro/cadastro';
import ExploreScreen from './pages/explorar/explorar';
import FormularioScreen from './pages/formulario/formulario';
import GrupoEscolhidoScreen from './pages/grupos/grupos'
import InteresseScreen from './pages/interesses/interesses';
import LoginScreen from './pages/login/login';
import PerfilScreen from './pages/profile/profile';
import ChatScreen from './pages/chat/chat';
import HomeScreen from './pages/home/home';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Directions } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';



const CadastroStack = createStackNavigator({
    Cadastro: { screen: CadastroScreen }
});

const FormularioStack = createStackNavigator({
    Formulario:  {screen: FormularioScreen}
});

const GrupoEscolhidoStack = createStackNavigator({
    GrupoEscolhido: { screen: GrupoEscolhidoScreen }
});

const InteresseStack = createStackNavigator({
    Interesse: { screen: InteresseScreen }
});

const LoginStack = createStackNavigator({
    Login: { screen: LoginScreen }
});




const NavegadorPadrao = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Explorar: { screen: ExploreScreen },
    Perfil: { screen: PerfilScreen },
    Chat: { screen: ChatScreen }
},
    {
        //inactive tint color
        initialRouteName: 'Home',
        tabBarOptions: {
            showLabel: true,
            showIcon: false,
            // activeTintColor:'#fff',
            // inactiveTintColor:'#000',
            // style: {
            //     width: '100%',
            //     height: 50
            // },
            // labelStyle: {
            //     paddingBottom: 6,
            //     // fontWeigth: "bold",
            //     fontSize: 25,
            // },
            // tabStyle: {
            //     width: 100,
            // }

            style:{
                elevation: 0, //boxShadow no Android
                showOpacity: 0, //boxShadow no IOS
                heigth: 64,
            },
            tabStyle:{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            
            iconStyle:{
                flex: 0,
                width: 20,
                height: 20
            },
            labelStyle:{
                fontSize: 13,
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column'
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#32264d'
        },
    },

)


// container
export default createAppContainer(
    createSwitchNavigator({
        MyTabs,
        CadastroStack,
        FormularioStack,
        GrupoEscolhidoStack,
        InteresseStack,
        LoginStack
    }
));