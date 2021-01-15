  
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

import Cadastro from '../pages/cadastro/cadastro.js';
import Home from '../pages/explorar/explorar';
// import Formulario from '../pages/formulario/formulario';
import Grupos from '../pages/grupos/grupos'
import Interesse from '../pages/interesses/interesses';
import Login from '../pages/login/login';
import Profile from '../pages/profile/profile';

const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Profile" component={Profile} />
                <Screen name="Landing" component={Home} />
                <Screen name="Cadastro" component={Cadastro} />
                {/* <Screen name="Formulario" component={Formulario} /> */}
                <Screen name="Grupo" component={Grupos} />
                <Screen name="Interesse" component={Interesse} />
                <Screen name="Login" component={Login} />

                <Screen name="Tabs" component={TabNavigator} />

            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;