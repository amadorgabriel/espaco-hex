import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

import RegisterScreen from "../pages/Register/index";
import LoginScreen from "../pages/Login/index";
import SplashScreen from "../pages/Splash/index";
import InterestScreen from "../pages/Interests/index";
import ExploreScreen from "../pages/Explore/index";
import GroupViewScreen from "../pages/GroupPage/index";
// import FormScreen from "../pages/Form";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: true, headerTitleAlign: "right" }}
  >
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{
        headerTitleStyle: {
          fontFamily: "Inter_600SemiBold",
        },
        headerTintColor: "transparent",
        headerTransparent: true,
        headerStyle: {
          backgroundColor: "transparent",
        },
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        headerTitleStyle: {
          fontFamily: "Inter_600SemiBold",
        },
        headerTintColor: "black",
        headerTransparent: false,
        headerStyle: {
          backgroundColor: "#fafafa",
          elevation: 0
        },
        headerTitle: "",
      }}
    />
    <Stack.Screen
      name="Interests"
      component={InterestScreen}
      options={{
        headerTitleStyle: {
          fontFamily: "Inter_600SemiBold",
        },
        headerTintColor: "trasparent",
        headerTransparent: true,
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTitle: "",
      }}
    />
    <Stack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        headerTitleStyle: {
          fontFamily: "Inter_600SemiBold",
        },
        headerTintColor: "black",
        headerTransparent: false,
        headerStyle: {
          backgroundColor: "#fafafa",
          elevation: 0.4,
          borderBottomColor: "#CCC",
        },
        headerTitle: "Explorar",
      }}
    />
    <Stack.Screen
      name="GroupPage"
      component={GroupViewScreen}
      options={{
        headerTitleStyle: {
          fontFamily: "Inter_600SemiBold",
        },
        headerTintColor: "#000",
        headerTransparent: true,
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTitle: "",
      }}
    />
  </Stack.Navigator>
);
