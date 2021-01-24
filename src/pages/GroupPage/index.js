import React, { useState, useCallback, useRef } from "react";
import {
  Container,
  Scroller,
  MainContent,
  ButtonDefault,
  InputDefault,
  styles,
} from "./styles";
import { Model } from "react-model";
import { useNavigation } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";
import AwesomeAlert from "react-native-awesome-alerts";

import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";

import GroupProfile from "../../assets/images/group-profile.png";
import MatchButtonImg from "../../assets/icons/heart-1.svg";
import TagComponent from "../../components/Tag/index";
import ButtonComponent from "../../components/Button/index";

const SlideSchema = {
  state: {
    imgList: [
      "https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
      "https://i.guim.co.uk/img/media/d305370075686a053b46f5c0e6384e32b3c00f97/0_50_5231_3138/master/5231.jpg?width=1200&quality=85&auto=format&fit=max&s=dfc589d3712148263b1dd1cb02707e91",
      "https://www.incimages.com/uploaded_files/image/1920x1080/rey-seven-nm-mZ4Cs2I-unsplash_397351.jpg",
      "https://images.indianexpress.com/2020/04/books_1200.jpg",
    ],
    loadQueue: [0, 0, 0, 0],
  },
  actions: {
    loaded: (index) => {
      return (state) => {
        state.loadQueue[index] = 1;
      };
    },
  },
};

const Slide = (props) => {
  return (
    <View style={styles.slide}>
      <Image
        onLoad={() => {
          props.loadHandle(props.i);
        }}
        style={styles.image}
        source={{ uri: props.uri }}
      />
    </View>
  );
};

export default () => {
  //Slider
  const [{ useStore }] = useState(() => Model(SlideSchema));
  const [state, actions] = useStore();
  const loadHandle = useCallback((i) => {
    actions.loaded(i);
  }, []);

  //Alert
  const [showAlert, setShowAlert] = useState(false);
  const [titleAlert, setTitleAlert] = useState("");
  const [messageAlert, setMessageAlert] = useState("");

  hideAlert = () => {
    setShowAlert(false);
  };

  //Modal
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  //Input
  const [isFocused, setIsFocused] = useState(false);
  const [valueInput, setValueInput] = useState("");

  //Navigation
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.content}>
        <Scroller>
          <Swiper
            loadMinimal
            loadMinimalSize={1}
            // index={0}
            style={styles.wrapper}
            loop={true}
          >
            {SlideSchema.state.imgList.map((item, i) => (
              <Slide
                loadHandle={loadHandle}
                uri={item}
                i={i}
                key={i}
                loaded={SlideSchema.state.loadQueue[i]}
              />
            ))}
          </Swiper>

          <MainContent>
            <View style={styles.topView}>
              <Image source={GroupProfile} style={styles.groupProfile} />

              <TouchableOpacity
                style={styles.matchBtn}
                onPress={() => {
                  setTitleAlert("Você realizou um Match!");
                  setMessageAlert(
                    "Grupo adicionado aos seus favoritos! (alerta provisório)"
                  );
                  setShowAlert(true);
                }}
              >
                <MatchButtonImg width="40" />
              </TouchableOpacity>
            </View>

            <View style={styles.mainText}>
              <Text style={styles.title}>Espaço HEX</Text>
              <Text style={styles.description}>
                Somos os idealizadores da plataforma HEX, damos um espaço de
                criação para os alunos do SENAI informática que desejam criar.{" "}
              </Text>
            </View>

            <View style={styles.scrollView}>
              <Text style={styles.subTitle}>Interesses</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TagComponent textTag="Escrita Criativa" />
                <TagComponent textTag="Fotografia" />
                <TagComponent textTag="Roteiro" />
                <TagComponent textTag="Cenografia" />
                <TagComponent textTag="Edição" />
              </ScrollView>
            </View>

            <View style={styles.scrollView}>
              <Text style={styles.subTitle}>Vagas</Text>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <ButtonDefault onPress={onOpen}>
                  <Text style={{ color: "#FFF", fontSize: 15 }}>
                    Fotográfo(a)
                  </Text>
                </ButtonDefault>

                <ButtonDefault onPress={onOpen}>
                  <Text style={{ color: "#FFF", fontSize: 15 }}>
                    Redator(a)
                  </Text>
                </ButtonDefault>
              </ScrollView>
            </View>
          </MainContent>
        </Scroller>
      </View>

      <Modalize ref={modalizeRef}>
        <View style={{ padding: 20 }}>
          <View style={styles.mainText}>
            <Text style={styles.title}>Formulário</Text>
            <Text style={styles.description}>
              Mostre que você está interessado no cargo agora mesmo!
            </Text>
          </View>

          <InputDefault
            style={[isFocused && { borderColor: "#FFC5C5" }]}
            defaultValue={valueInput}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onChangeText={(valueInput) => setValueInput(valueInput)}
            returnKeyType="done"
            underlineColorAndroid="transparent"
            placeholder="Como você pode contribuir?"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            style={{ height: 300, textAlignVertical: "top" }}
          />

          <ButtonDefault
            onPress={() => {
              setTitleAlert("Você se Candidatou!");
              setMessageAlert(
                "Agora o time irá avaliar sua candidatura e entrar em contato com você, boa sorte!"
              );
              setShowAlert(true);
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 15, textAlign: "center" }}>ENVIAR</Text>
          </ButtonDefault>

        </View>
      </Modalize>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={titleAlert}
        message={messageAlert}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Entendido!"
        confirmButtonColor="#DD6B55"

        onConfirmPressed={() => {
          hideAlert();
          
          if (titleAlert == "Você se Candidatou!") {
            navigation.navigate("Explore");
          }
        }}
      />
      <StatusBar hidden={true} />
    </Container>
  );
};
0;
