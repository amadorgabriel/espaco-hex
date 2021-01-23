import React, { useState, useCallback }from "react";
import { Container, Scroller, styles } from "./styles";
import { Text, View, Image, StatusBar } from "react-native";
import Swiper from 'react-native-swiper'
import { Model } from 'react-model'

import GroupProfile from "../../assets/images/group-profile.png";
import MatchButtonImg from "../../assets/icons/heart-icon.svg";
import GroupImage1 from "../../assets/images/bg-group.png";

import ButtonComponent from "../../components/Button/index";
import TagComponent from "../../components/Tag/index";


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
  const [{ useStore }] = useState(() => Model(SlideSchema));
  const [state, actions] = useStore();
  const loadHandle = useCallback((i) => {
    actions.loaded(i);
  }, []);

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

          <View style={{marginTop: -40}}>
            <View>
              <Image source={GroupProfile} />

              <Image source={MatchButtonImg} />
            </View>

            <View style={styles.conteudo}>
              <Text>Grupo Espaço HEX</Text>
              <Text>
                Somos os idealizadores da plataforma HEX, damos um espaço de
                criação para os alunos do SENAI informática que desejam criar.{" "}
              </Text>
            </View>

            <View style={styles.interesses}>
              <Text>Interesses</Text>
              <View>
                <TagComponent textTag="Escrita Criativa" />
                <TagComponent textTag="Fotografia" />
              </View>
            </View>

            <View style={styles.vagas}>
              <Text>Vagas</Text>
              <View style={styles.botao}>
                <ButtonComponent
                  textButton="FOTÓGRAFIA"
                  redirectRouteName="Interests"
                />
                <ButtonComponent
                  textButton="REDATOR"
                  redirectRouteName="Interests"
                />
              </View>
            </View>
          </View>
        </Scroller>
      </View>

      <StatusBar hidden={true} />
    </Container>
  );
};
0;
