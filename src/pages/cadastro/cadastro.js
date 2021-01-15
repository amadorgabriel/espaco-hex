import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Este é o Cadastro</Text>

      <TextInput />
      
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: "#FFF"
    
  }
});
