import { View, Text } from "react-native";
import React, { useEffect } from "react";
import NewExpense from "../screens/NewExpense";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabStack from "./TabStack";
import SignUp from "../screens/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  const navigation = useNavigation();

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  const checkUserAuthentication = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        navigation.navigate("TabStack");
      }
    } catch (error) {
      console.log("Error reading user data from storage:", error);
    }
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TabStack"
        component={TabStack}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="NewExpense"
        component={NewExpense}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
