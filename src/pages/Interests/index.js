import React from "react";
import { Container, styles } from "./styles";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import TagComponent from "../../components/Tag/index";
import BackgroundSVG from "../../assets/images/bg-default.svg";
import Nextimage from "../../assets/icons/icon-next.svg";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackgroundSVG width="70%" style={styles.background} />

      <ScrollView style={styles.content}>
        <View style={{ paddingHorizontal: 40 }}>
          <Text style={styles.font}>Interesses</Text>
          <Text style={styles.subText}>
            Selecione os interesses que combinam com você =D
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            width: "95%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 190,
          }}
        >
          <View style={styles.tagContainer}>
            <TagComponent textTag="CSS" />
            <TagComponent textTag="EDIÇÃO" />
            <TagComponent textTag="GAMES" />
            <TagComponent textTag="JAVA" />
            <TagComponent textTag="UI/UX" />
            <TagComponent textTag="ROTEIRO" />
            <TagComponent textTag="FOTOGRAFIA" />
            <TagComponent textTag="ATUAÇÃO" />
            <TagComponent textTag="PHOTOSHOP" />
            <TagComponent textTag="FIGURINO" />
            <TagComponent textTag="ILUSTRAÇÃO" />
            <TagComponent textTag="ROTEIRO" />
            <TagComponent textTag="HTTP" />
            <TagComponent textTag="CENOGRAFIA" />
            <TagComponent textTag="PROTOCOLO DE REDES" />
            <TagComponent textTag="ARTESANATO" />
            <TagComponent textTag="MEIO AMBIENTE" />
            <TagComponent textTag="CONFIGURAÇÃO DE PORTAS" />
            <TagComponent textTag="POESIA" />
            <TagComponent textTag="PINTURA" />
            <TagComponent textTag="SCSS" />
            <TagComponent textTag="CIÊNCIAS SOCIAIS" />
            <TagComponent textTag="DIAGRAMAS DE REDE" />
            <TagComponent textTag="JAVASCRIPT" />
            <TagComponent textTag="AWS" />
            <TagComponent textTag="PERÍODOS" />
            <TagComponent textTag="SONOPLASTIA" />
            <TagComponent textTag="CLOUD" />
            <TagComponent textTag="GAMIFICAÇÃO" />
            <TagComponent textTag="ECOLOGIA" />
            <TagComponent textTag="ECONOMIA" />
            <TagComponent textTag="ESCRITA CRIATIVA" />
            <TagComponent textTag="ILUSTRATOR" />
            <TagComponent textTag="CYBER SEGURANÇA" />
            <TagComponent textTag="NOMENCLATURA TÉCNICA" />
            <TagComponent textTag="GESTÃO" />
          </View>

        </View>
      </ScrollView>

          <TouchableOpacity style={styles.floatButton} onPress={() => navigation.navigate("Explore")}>
            <Nextimage width='35'/>
          </TouchableOpacity>
      <StatusBar style="dark" />
    </Container>
  );
};
