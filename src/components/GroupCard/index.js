import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  CardItem,
  ProfileImage,
  ContentView,
  GroupImage,
  ProfilesContainer,
  Description,
  Title,
  ProgressBar,
} from "./style";

import { Text, View } from "react-native";
import ImagemProgressBar from "../../assets/images/progress-bar.png";

import ProfileImg1 from "../../assets/images/team1.jpg";
import ProfileImg2 from "../../assets/images/team2.jpg";
import ProfileImg3 from "../../assets/images/team3.jpg";
import ProfileImg4 from "../../assets/images/team6.jpg";
import ProfileImg5 from "../../assets/images/team5.jpg";
import ProfileImg6 from "../../assets/images/team7.jpg";
import ProfileImg7 from "../../assets/images/team8.png";

export default ({ srcGroupImageBg, groupName, textContent, ...rest }) => {
  const navigation = useNavigation();

  var picQuantity = [1, 2, 3, 4, 5, 6, 7];
  var sortPicQuantity =
    picQuantity[Math.floor(Math.random() * picQuantity.length)];
  var imgComponents = [
    ProfileImg1,
    ProfileImg2,
    ProfileImg3,
    ProfileImg4,
    ProfileImg5,
    ProfileImg6,
    ProfileImg7,
  ];

  let rows = [];
  for (let i = 1; i < sortPicQuantity; i++) {
    rows.push(
      <ProfileImage
        source={imgComponents[Math.floor(Math.random() * imgComponents.length)]}
      ></ProfileImage>
    );
  }

  return (
    <CardItem onPress={() => navigation.navigate("GroupPage")}>
      <GroupImage source={srcGroupImageBg} />

      <ContentView>
        <Title> {groupName} </Title>
        <Description>{textContent}</Description>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "column", marginTop: 25, justifyContent:"space-between", alignItems: "flex-start", marginLeft: 7  }}>
            <Text> Progresso do grupo </Text>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"space-between", width: '85%',marginLeft: 7   }}>

              <ProgressBar source={ImagemProgressBar} />

              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 25,
                  color: "#464646",
                }}
              >
                 35%
              </Text>
            </View>
          </View>
        </View>

        <ProfilesContainer>{rows}</ProfilesContainer>
      </ContentView>
    </CardItem>
  );
};
