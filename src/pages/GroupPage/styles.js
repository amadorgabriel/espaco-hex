import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  background-color: #f9f9f9;
  flex: 1;
  position: relative;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Scroller = styled.ScrollView`
  margin-bottom: 20px;
  width: 100%;
`;

export const MainContent = styled.View`
  margin-top: -50px;
  padding-horizontal: 20px;
  width: 100%;
`;

export const ButtonDefault = styled.TouchableOpacity`
    background-color: #D51E4C;
    padding: 18px;
    border-radius: 25;
    color: #FFF;
    justify-content: center;
    margin-right: 10px;

    shadow-color: red;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: .5;
    elevation: 5;
`;

export const InputDefault = styled.TextInput`
    background-color: #FEE6E6;
    border-color: #FEE6E6;
    border-radius: 8;
    border-width: 1;
    width: 100%;

    margin-top: 10;
    margin-bottom: 25
    padding-top: 15;
    padding-left: 15;
    padding-right: 15;
    font-size: 15;
    font-family: "Inter_500Medium"
    color: #777777;
`;

export const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  font: {
    fontSize: 34,
    fontFamily: "Inter_600SemiBold",
    marginTop: 60,
  },
  topView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  groupProfile: {
    width: 110,
    height: 110,
  },
  matchBtn: {
    backgroundColor: "#EB6679",
    borderRadius: 180,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    marginRight: 10,

    shadowColor: "red",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  mainText:{
    marginVertical: 20
  },
  title:{
    fontSize: 20,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 2
  },
  description: {
    fontSize: 18,
    color: "#808080",
    fontFamily: "Inter_300Light",
  },
  scrollView:{
    marginBottom: 20,
  },  
  subTitle: {
    fontSize: 15,
    fontFamily: "Inter_500Medium",
    marginBottom: 10
  },

  // SWIPER
  wrapper: {
    height: 250,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: "100%",
    flex: 1,
    backgroundColor: "transparent",
  },
  loadingView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  loadingImage: {
    width: 60,
    height: 60,
  },

  //Modal


});
