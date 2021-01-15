import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Explorar() {

  return (
    <ScrollView style={styles.container}>

        <Text h1 >Estes são os gupos disponíveis</Text>


      <View style={styles.card}>
        <Text> Teste </Text>
      </View>
      <View style={styles.card}>
        <Text> Teste </Text>
      </View>
      
      <StatusBar style="auto" />
    </ScrollView>
  );

}
