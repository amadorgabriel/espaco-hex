import React from "react";
import { Container, styles } from "./styles";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import CardItemComponent from "../../components/GroupCard/index";
import BackgroundSVG from "../../assets/images/bg-default.svg";
import GroupImage1 from "../../assets/images/group1.jpg";
import GroupImage2 from "../../assets/images/group2.jpg";
import GroupImage3 from "../../assets/images/group3.jpg";

export default () => {
  return (
    <Container>
      <BackgroundSVG width="70%" style={styles.background} />

      <ScrollView style={styles.content}>
        <CardItemComponent
          srcGroupImageBg={GroupImage1}
          groupName="Espaçonautas"
          textContent="Idealizadores da plataforma HEX, um espaço de criação para os alunos
          do SENAI informática."
        />

        <CardItemComponent
          srcGroupImageBg={GroupImage2}
          groupName="Coders"
          textContent="Desenvolvemos diversas plataformas relacionadas a gestão de tarefas, confira alguns de nossos trabalhos."
        />

        <CardItemComponent
          srcGroupImageBg={GroupImage3}
          groupName="Roterizando"
          textContent="Nós somos apaixonados por criar e contar novas histórias, desenvolvemos roteiros até publicarmos nossas próprias obras."
        />

        <CardItemComponent
          srcGroupImageBg={GroupImage1}
          groupName="Espaçonautas"
          textContent="Idealizadores da plataforma HEX, um espaço de criação para os alunos
          do SENAI informática."
        />

        <CardItemComponent
          srcGroupImageBg={GroupImage2}
          groupName="Coders"
          textContent="Desenvolvemos diversas plataformas relacionadas a gestão de tarefas, confira alguns de nossos trabalhos."
        />

        <CardItemComponent
          srcGroupImageBg={GroupImage3}
          groupName="Roterizando"
          textContent="Nós somos apaixonados por criar e contar novas histórias, desenvolvemos roteiros até publicarmos nossas próprias obras."
        />
      </ScrollView>

      <StatusBar style="dark" />
    </Container>
  );
};
