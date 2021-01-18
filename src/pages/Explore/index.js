import React from "react";
import { Container, styles } from "./styles";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import BackgroundSVG from "../../assets/images/bg-default.svg";
import CardItemComponent from "../../components/GroupCard/index"; 

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackgroundSVG width="70%" style={styles.background} />

      <ScrollView style={styles.content}>
        <CardItemComponent />
        <CardItemComponent />
        <CardItemComponent />

      </ScrollView>

      <StatusBar style="dark" />
    </Container>
  );
};
