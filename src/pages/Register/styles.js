import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const Container = styled.SafeAreaView`
    background-color: #F9F9F9;
    flex: 1;
    position: relative;
    justify-content: flex-start;
    align-items: flex-end;
`;

export const Scroller = styled.ScrollView`
    margin-bottom: 20px;
    width: 100%;
`;

export const styles = StyleSheet.create({
    background:{
        marginRight: -40
    },    
    content:{
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    font:{
        fontSize: 34,
        fontFamily: "Inter_600SemiBold",
        marginTop: 60
    },
    subText: {
        fontSize: 18,
        color: "#808080",
        fontFamily: "Inter_300Light", 
        marginBottom: -40
    }
});