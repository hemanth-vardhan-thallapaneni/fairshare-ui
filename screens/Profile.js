import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as StylingProperties from "../constants/StylingProperties.js";

import { Feather } from "@expo/vector-icons";
const Profile = () => {
  let [user, setUser] = useState({});
  const [settingsMenu, setSettingsMenu] = useState([
    {
      name: "Profile Settings",
    },
    {
      name: "Notifications",
    },
  ]);

  AsyncStorage.getItem("userData").then((value) => {
    user = JSON.parse(value);
    setUser(user);
  });

  const navigation = useNavigation();
  const logout = () => {
    AsyncStorage.clear();
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.profileContainer}>
      <Text style={styles.profileTitle}>Profile</Text>
      <TouchableOpacity>
        <Image
          style={styles.profileButton}
          source={{ uri: user.profile_picture }}
        ></Image>
      </TouchableOpacity>

      <Text style={styles.userTitle}>@{user?.user_name}</Text>
      <View style={styles.menuList}>
        {settingsMenu.map((menu, index) => (
          <TouchableOpacity style={styles.menuItem} key={index}>
            <Text style={styles.menuName}>{menu.name}</Text>
            <Feather name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={logout}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
    margin: 20,
  },
  profileTitle: {
    width: "100%",
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
  },
  userTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: StylingProperties.darkTextColor,
  },
  menuList: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: 20,
    borderWidth: 1,
    borderColor: StylingProperties.borderColor,
    borderRadius: StylingProperties.borderRadius,
  },
  menuName: {
    color: StylingProperties.primaryColor,
    fontWeight: 600,
  },
  profileButton: {
    height: 120,
    width: 120,
    borderRadius: 50,
  },
  logoutButton: {
    fontWeight: "bold",
    color: StylingProperties.darkTextColor,
  },
});

export default Profile;
