import React, { useState } from "react";
import { Container, Scroller, styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from "react-native-awesome-alerts";
import { Text, View, TouchableOpacity} from "react-native";

import ButtonComponent from "../../components/Button/index";
import InputComponent from "../../components/Input/index";

//IMAGES
import BackgroundSVG from "../../assets/images/bg-default.svg";
import GoogleBtnSVG from "../../assets/images/googleBtn.svg";


export default () => {
  const [showAlert, setShowAlert] = useState(false);

  hideAlert = () => {
    setShowAlert(false);
  };

  const navigation = useNavigation();

  return (
    <Container>
      <BackgroundSVG width="70%" style={styles.background} />

      <View style={styles.content}>
        <Scroller>
          <View style={{ paddingLeft: 30, paddingBottom: 60 }}>
            <Text style={styles.font}>Login</Text>
            <Text style={styles.subText}>
              Faça seu login de forma rápida e segura
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <InputComponent textLabel="Email" />
            <InputComponent textLabel="Senha" />

            <ButtonComponent
              textButton="ENTRAR"
              redirectRouteName="Explore"
            ></ButtonComponent>
          </View>

          <View style={styles.viewInferior}>
            <Text style={styles.text}>Você ainda não tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            >
              <Text style={styles.textLink}>Cadastre-se agora</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <GoogleBtnSVG
                onPress={() => {
                  setShowAlert(true);
                }}
              />
            </TouchableOpacity>
          </View>
        </Scroller>
      </View>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Em Desenvolvimento!"
        message="Nós estamos tabalhando duro para a proxima versão, aguarde!"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Entendido"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          hideAlert();
        }}
      />
      <StatusBar style="dark" />
    </Container>
  );
};
