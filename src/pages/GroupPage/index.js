import React from "react";
import { Container, styles } from "./styles";
import { ScrollView, Tex, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import BackgroundSVG from "../../assets/images/bg-default.svg";
import GroupImage1 from "../../assets/images/group1.jpg";

export default () => {
  return (
    <ScrollView>
      <View style={styles.content}>
        <BackgroundSVG width="70%" style={styles.background} />
       
       
        
      </View>
    </ScrollView>
  );
};
