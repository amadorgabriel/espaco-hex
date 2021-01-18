import React from "react";
import { ButtonDefault } from "./style";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ({ textButton, redirectRouteName, ...rest }) => {
  const navigation = useNavigation();

  return (
    <ButtonDefault onPress={() => navigation.navigate(redirectRouteName)}>
      <Text style={{ color: "#FFF", fontSize: 15 }}>{textButton}</Text>
    </ButtonDefault>
  );
};
