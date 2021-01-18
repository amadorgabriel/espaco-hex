import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_300Light } from '@expo-google-fonts/inter';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_600SemiBold,
    Inter_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

