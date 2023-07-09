import React, { useState, useEffect } from "react";
import { StyleSheet, PermissionsAndroid, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Camera } from "expo-camera";
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
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <UserStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
