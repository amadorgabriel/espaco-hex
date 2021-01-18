import React, { useState } from "react";
import { CardItem } from "./style";
import { Image, Text, View } from "react-native";

import ImagemGroup from '../../assets/images/group-image.png';
import ImagemTeam1 from '../../assets/images/team5.png';
import ImagemTeam2 from '../../assets/images/team4.png';
import ImagemTeam3 from '../../assets/images/team3.png';
import ImagemTeam4 from '../../assets/images/team2.png';
import ImagemTeam5 from '../../assets/images/team1.png';
import ImagemProgressBar from '../../assets/images/progress-bar.png';


export default () => {
  return (
    <CardItem>
      <Image
        
        source={ImagemGroup}
      />

      <View>
        <Text> Espaçonautas </Text>
        <Text>
          Idealizadores da plataforma HEX, um espaço de criação para os alunos
          do SENAI informática.
        </Text>

        <Image source={ImagemProgressBar} />

        <View>
          <Image source={ImagemTeam1} />
          <Image source={ImagemTeam2} />
          <Image source={ImagemTeam3} />
          <Image source={ImagemTeam4} />
          <Image source={ImagemTeam5} />
        </View>
      </View>
    </CardItem>
  );
};
