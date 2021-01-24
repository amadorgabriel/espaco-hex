import React, { useState, useCallback } from "react";
import { Container, styles } from "./styles";
import { ScrollView, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";

import CardItemComponent from "../../components/GroupCard/index";
import GroupImageApollo from "../../assets/images/apollo.jpg";
import GroupImage2 from "../../assets/images/group2.jpg";
import GroupCoding from "../../assets/images/coding.jpg";
import Group12 from "../../assets/images/group1-2.png";


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
          srcGroupImageBg={GroupImageApollo}
          groupName="Espaçonautas"
          textContent="Idealizadores da plataforma HEX, um espaço de criação para os alunos
          do SENAI informática. Feito para incentivar o pensamento fora da caixa"
        />

        <CardItemComponent
          srcGroupImageBg={GroupImage2}
          groupName="Coders"
          textContent="Desenvolvemos diversas plataformas relacionadas a gestão de tarefas, confira alguns de nossos trabalhos."
        />
        <CardItemComponent
          srcGroupImageBg={Group12}
          groupName="Roterizando"
          textContent="Nós somos apaixonados por criar e contar novas histórias, desenvolvemos roteiros até publicarmos nossas próprias obras."
        />

        <CardItemComponent
          srcGroupImageBg={GroupCoding}
          groupName="Ps:(Home Coders)"
          textContent="Aqui você pode ganhar aquela grana extra, nos ajudando a codar paginas web e aplicativos para diversificadas áreas do mundo da programação "
        />
      </ScrollView>

      <StatusBar style="dark" />
    </Container>
  );
};
