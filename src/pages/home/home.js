import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ViewPropTypes } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component{
  
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Image source={require('../../assets/icons/home2.png')} style={styles.icon} tintColor={tintColor} />
    )
  }
  
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text>Esta é a Home</Text>

          </View>
          
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 35,
    width: 35,
  }
});
