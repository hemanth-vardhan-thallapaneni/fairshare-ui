import { View, Text } from "react-native";
import React from "react";
import Home from "../screens/Home";
import Calendar from "../screens/Calendar";
import Todo from "../screens/Todo";
import Profile from "../screens/Profile";
import { Feather } from "@expo/vector-icons";
import Header from "../components/shared/Header";
import * as StylingProperties from "../constants/StylingProperties.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { display: "none" },
        tabBarStyle: {
          backgroundColor: StylingProperties.lightBackgroundColor,
          borderTopWidth: 0,
        },

        tabStyle: {
          borderTopWidth: 0, // Remove individual tab borders
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Calendar") {
            iconName = focused ? "calendar" : "calendar";
          } else if (route.name === "Todo") {
            iconName = focused ? "list" : "list";
          } else if (route.name === "Profile") {
            iconName = focused ? "user-check" : "user-check";
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#815B5B",
        tabBarInactiveTintColor: "#D5B4B4",
      })}
    >
      <Tab.Screen
        options={{
          headerTitle: () => <Header />,
          headerStyle: {
            height: 130,
            backgroundColor: "transparent",
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Todo" component={Todo} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
