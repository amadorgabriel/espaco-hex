import React, { useEffect } from "react";
import {Container, LoadingIcon, style} from './styles'
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/images/splash-logo.svg';
import CurveBgSVG from '../../assets/images/top-splash-bg.svg';

export default () => { 

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(function() {navigation.navigate('Login')}, 5000);
    }, []);

    return (
        <Container>
            <CurveBgSVG style={style.topSvg} width="100%"  />

            <View style={style.content}>
                <Logo width="100%" height="200" />
                <LoadingIcon size="large" color="#FEE6E6" />
            </View>

            <StatusBar style="light"  />
        </Container>
    );
};





