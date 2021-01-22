import React, { useState, useCallback } from "react";
import { Container, styles } from "./styles";
import { ScrollView, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";

import CardItemComponent from "../../components/GroupCard/index";
import GroupImage1 from "../../assets/images/group1.jpg";
import GroupImage2 from "../../assets/images/group2.jpg";
import GroupImage3 from "../../assets/images/group3.jpg";

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <Container>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
          groupName="Ps: (Nós codamos)"
          textContent="Idealizadores da plataforma HEX, um espaço de criação para os alunos
          do SENAI informática."
        />
      </ScrollView>

      <StatusBar style="dark" />
    </Container>
  );
};
