import React from "react";
import { Container, styles } from "./styles";
import { Text,View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";
import BackgroundSVG from "../../assets/images/bg-default.svg";


export default () => {
    const navigation = useNavigation();

  return (
    <Container>
      <BackgroundSVG width="70%" style={styles.background} />

      <View style={styles.content}>
        <View style={{ paddingLeft: 20 }}>
          <Text style={styles.font}>Cadastro</Text>
          <Text style={styles.subText}>
          Olá, seja bem vindo(a) ao espaço Hex,  tire suas ideias do papel hoje mesmo!
          </Text>
        </View>

        <View>
          <InputComponent textLabel="Email"  />
          <InputComponent textLabel="Senha" />
          <InputComponent textLabel="Idade" />
          <InputComponent textLabel="Curso" />

          <ButtonComponent
            textButton="VAMOS LÁ"
            redirectRouteName="Interests"
          ></ButtonComponent>
        </View>
      </View>

      <StatusBar style="dark" />
    </Container>
  );
};
