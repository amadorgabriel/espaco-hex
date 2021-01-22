import React, {useState} from "react";
import { Container, Scroller, styles } from "./styles";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";
import BackgroundSVG from "../../assets/images/bg-default.svg";

export default () => {
  const [selectedValue, setSelectedValue] = useState("java");


  return (
    <Container>
      <BackgroundSVG width="70%" style={styles.background} />

      <View style={styles.content}>
        <Scroller>
          <View style={{ paddingHorizontal: 30, paddingBottom: 60 }}>
            <Text style={styles.font}>Cadastro</Text>
            <Text style={styles.subText}>
              Olá, seja bem vindo(a) ao espaço Hex, tire suas ideias do papel
              hoje mesmo!
            </Text>
          </View>

          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <InputComponent textLabel="Nome" />
            <InputComponent textLabel="Email" />
            <InputComponent textLabel="Senha" />
            <InputComponent textLabel="Idade" keyboardType="numeric" />
            <InputComponent textLabel="Curso" />

            <ButtonComponent
              textButton="VAMOS LÁ"
              redirectRouteName="Interests"
            ></ButtonComponent>
          </View>
        </Scroller>
      </View>

      <StatusBar style="dark" />
    </Container>
  );
};
