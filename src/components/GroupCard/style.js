import styled from 'styled-components/native';


export const CardItem = styled.TouchableOpacity`
    flex-direction: column;
    background-color: #FFF;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    margin: 20px 0px;

    shadow-color: red;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: .5;
    elevation: 4;

`;

export const ContentView = styled.View`
    margin: 10px;
`;

export const ProfileImage = styled.Image`
    height: 32px;
    width: 32px;
    border-radius: 120px;
`;
    
export const GroupImage = styled.Image`
    width: 100%;
    height: 230px;
`;

export const ProgressBar = styled.Image`
    width: 240px;
    height: 20px;
    margin: 20px 0px 20px 7px;
`;

export const Title = styled.Text`
    font-family: Inter_600SemiBold;
    font-size: 25;
    margin-top: 10px;
`;

export const Description = styled.Text`
    font-family: Inter_300Light
    font-size: 15;
    margin: 0 0 0 7px;
    color: #5A5A5A;
`;
    
export const ProfilesContainer = styled.View`
    flex-direction: row;
    max-width: 60%;
    justify-content: space-around;
    margin-vertical: 10px;
    
`;

