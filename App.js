import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/SignUp";
import UserStack from "./navigation/UserStack";
const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF8EA",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <UserStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
