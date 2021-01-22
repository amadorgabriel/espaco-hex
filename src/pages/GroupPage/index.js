import React from "react";
import { Container, styles } from "./styles";
import { ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import BackgroundSVG from "../../assets/images/bg-default.svg";
import GroupImage1 from "../../assets/images/group1.jpg";

export default () => {
  return (
    <ScrollView>
      <View style={styles.content}>
        <BackgroundSVG width="70%" style={styles.background} />
        <View style={style.title}>
          <Text>Grupo Espaço HEX </Text>
        </View>

        <View style={style.txt}>
          <Text> Somos os idealizadores da plataforma </Text>
          <Text> HEX, damos um espaço de criação para </Text>
          <Text> Os alunos do SENAI informática que desejam criar. </Text>
        </View>

        <View style={style.Buttom}>
          <ButtonComponent textButton="ESCRITA CRIATIVA"></ButtonComponent>         
          <ButtonComponent textButton="FOTOGRAFIA"></ButtonComponent>
        </View>
 
        <View style={style.Buttom2}>
          <ButtonComponent textButton="FOTÓGRAFO"></ButtonComponent>
          <ButtonComponent textButton="REDATOR"></ButtonComponent>
        </View>
        
      </View>
    </ScrollView>
  );
};
