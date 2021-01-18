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

import ProfileImg from "../../assets/images/profile.png";
import ImagemProgressBar from "../../assets/images/progress-bar.png";

export default ({ srcGroupImageBg, groupName, textContent, ...rest }) => {

  const navigation = useNavigation();

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
          <ProgressBar source={ImagemProgressBar} />
          <Text style={{fontWeight: "bold", marginRight: 20, color: "#464646"}}>35%</Text>
        </View>

        <ProfilesContainer>
          <ProfileImage source={ProfileImg} />
          <ProfileImage source={ProfileImg} />
          <ProfileImage source={ProfileImg} />
          <ProfileImage source={ProfileImg} />
          <ProfileImage source={ProfileImg} />
        </ProfilesContainer>
      </ContentView>
    </CardItem>
  );
};
