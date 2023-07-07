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
import { AntDesign } from "@expo/vector-icons";
import CustomQR from "../components/shared/CustomQR.js";
import CustomQRScanner from "../components/shared/CustomQRScanner.js";
const Profile = () => {
  let [user, setUser] = useState({});
  let [scanQr, setScanQr] = useState(false);
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
  const handleToggle = (openCamera) => {
    setScanQr(openCamera);
    if (openCamera) {
    } else {
    }
  };

  return (
    <SafeAreaView style={styles.profileContainer}>
      <Text style={styles.profileTitle}>Profile</Text>
      <View style={[styles.qrCardContainer, styles.card]}>
        <View style={[styles.qrHeaderContiner]}>
          <Image
            style={styles.profileButton}
            source={{ uri: user.profile_picture }}
          ></Image>
          <View>
            <Text style={styles.heading}>Profile Name</Text>
            <Text style={styles.profileName}>{user?.user_name}</Text>
          </View>
        </View>
        <View style={styles.qrContentContainer}>
          <Text style={styles.friendCode}>43A35</Text>
          <CustomQR />
        </View>
        {!scanQr && <CustomQRScanner />}
      </View>
      <View style={[styles.qrOptionsContainer, styles.card]}>
        <TouchableOpacity
          onPress={() => handleToggle(true)}
          style={[{ alignItems: "center" }, scanQr && styles.selected]}
        >
          <AntDesign
            name="qrcode"
            size={20}
            color={StylingProperties.darkTextColor}
            style={{ marginBottom: 5 }}
          />
          <Text>Scan QR Code</Text>
        </TouchableOpacity>
        <View style={styles.verticalDivider}></View>
        <TouchableOpacity
          onPress={() => handleToggle(false)}
          style={[{ alignItems: "center" }, !scanQr && styles.selected]}
        >
          <AntDesign
            name="scan1"
            size={20}
            color={StylingProperties.darkTextColor}
            style={{ marginBottom: 5 }}
          />
          <Text>My QR Code</Text>
        </TouchableOpacity>
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
    gap: 15,
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
  verticalDivider: {
    height: "100%",
    width: 1,
    borderWidth: 1,
    borderColor: StylingProperties.borderColor,
  },
  selected: {
    opacity: 0.5,
  },
  card: {
    padding: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: StylingProperties.borderColor,
    borderRadius: StylingProperties.borderRadius,
    shadowColor: StylingProperties.lightTextColor, // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: "10", //IOS
    elevation: 6, // Android
  },
  qrCardContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 10,
  },
  qrOptionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  qrHeaderContiner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
    padding: 20,
    width: "100%",
    borderBottomColor: StylingProperties.borderColor,
    borderBottomWidth: 1,
  },
  qrContentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  heading: {
    color: StylingProperties.darkTextColor,
    fontSize: 13,
    marginBottom: 5,
  },
  profileName: {
    color: StylingProperties.darkTextColor,
    fontSize: 15,
  },
  friendCode: {
    color: StylingProperties.darkTextColor,
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 8,
  },

  profileButton: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  logoutButton: {
    fontWeight: "bold",
    color: StylingProperties.darkTextColor,
  },
});

export default Profile;
