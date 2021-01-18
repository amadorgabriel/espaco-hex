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
        alignSelf: 'center',
        paddingTop: 80,
        marginHorizontal: 120,
        position: 'absolute',
        width: '100%',
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
    },
    tagContainer: {
        marginTop: 20,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: "center",        
    },
    floatButton:{
        position: 'absolute',
        zIndex: 999,
        backgroundColor: "#DB3022",
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 180,
        shadowColor: "#DB3022",
        shadowOpacity: 1,
        elevation: 5,
        right: 40,
        bottom: 40
    }
    
});