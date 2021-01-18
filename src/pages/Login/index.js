import React, { useState } from "react";
import { Container, styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from "react-native-awesome-alerts";

import ButtonComponent from '../../components/Button/index';
import InputComponent from '../../components/Input/index';

//IMAGES
import BackgroundSVG from "../../assets/images/bg-default.svg";
import GoogleBtnSVG from "../../assets/images/googleBtn.svg";

import {
  Text,
  View,
  Picker,
  Button,
  TouchableOpacity,
} from "react-native";


export default () => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Selecione seu Curso");

  hideAlert = () => {
    setShowAlert(false);
  };

  const navigation = useNavigation();

  return (
    <Container>
      <BackgroundSVG width="70%" style={styles.background} />

      <View style={styles.content}>
        <View style={{paddingLeft: 20}}>
          <Text style={styles.font}>Login</Text>
          <Text style={styles.subText}>
            Faça seu login de forma rápida e segura
          </Text>
        </View>

        <View>
          <InputComponent textLabel="Nome" />
          <InputComponent textLabel="Curso" />

          {/* <View>
            <Text>Curso</Text>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item
                label="Selecione seu Curso"
                value="empty"
                enabled={false}
                selectedValue={true}
              />
              <Picker.Item label="Multimídia" value="MM" />
              <Picker.Item label="Redes" value="RD" />
              <Picker.Item label="Desenvolvimento" value="DEV" />
            </Picker>
          </View> */}

          <ButtonComponent
              textButton="ENTRAR"
              redirectRouteName="Explore"
          >
          </ButtonComponent>
        </View>

        <View style={styles.viewInferior}>
          <Text style={styles.text}>Você ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}  >
            <Text style={styles.textLink}>Cadastre-se agora</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <GoogleBtnSVG style={{marginBottom: -30}}
              onPress={() => {
                setShowAlert(true);
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Em Desenvolvimento!"
        message="Nós estamos dando o tabalhando duro para a proxima versão, aguarde!"
        closeOnTouchOutside={true}
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
