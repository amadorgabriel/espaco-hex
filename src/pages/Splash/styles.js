 import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
    background-color: #EB6679;
    justify-content: space-between;
    flex: 1;
    position: relative
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const style = StyleSheet.create({
    topSvg:{
        marginTop: -60,        
    },
    content:{
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingTop: 80
    }
});