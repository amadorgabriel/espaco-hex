import React from "react";
import { Container } from "./styles";
import { ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import BackgroundSVG from "../../assets/images/bg-default.svg";
import GroupImage1 from "../../assets/images/group1.jpg";


export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackgroundSVG width="70%" style={styles.background} />

      <ScrollView style={styles.content}>
        <Text>GropuPage</Text> 
     
      </ScrollView>

      <StatusBar style="dark" />
    </Container>
  );
};
