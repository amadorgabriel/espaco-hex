import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
    background-color: #F9F9F9;
    flex: 1;
    position: relative;
    justify-content: flex-start;
    align-items: flex-end
`;


export const styles = StyleSheet.create({
    background:{
        marginRight: -40
    },    
    content:{
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        paddingTop: 30,
        marginLeft: 50,
        marginRight: 50,
        position: 'absolute',
        width: '90%',
        height: '100%',
        flex: 1
    },
    font:{
        fontSize: 34,
        fontFamily: "Inter_600SemiBold"
    },
    subText: {
        fontSize: 18,
        color: "#808080",
        fontFamily: "Inter_300Light", 
        marginBottom: -20
    },
    viewInferior:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30        
    },
    text:{
        fontFamily: "Inter_600SemiBold",
        fontSize: 13,
    },
    textLink:{
        fontFamily: "Inter_600SemiBold",
        fontSize: 13,
        color: "#D51E4C",
        marginBottom: 5    
    }
});