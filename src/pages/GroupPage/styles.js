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
    wrapper:{
      height: 250
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
      image: {
        width: '100%',
        flex: 1,
        backgroundColor: 'transparent'
      },
    
      loadingView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)'
      },
    
      loadingImage: {
        width: 60,
        height: 60
      }
});