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
import CustomInput from "../components/shared/CustomInput.js";
import friendsService from "../services/friendsService.js";
import CustomModal from "../components/shared/CustomModal.js";

const Profile = () => {
  let [user, setUser] = useState({});
  let [scanQr, setScanQr] = useState(false);
  const [friendCode, setFriendCode] = useState("");
  const [settingsMenu, setSettingsMenu] = useState([
    {
      name: "Profile Settings",
    },
    {
      name: "Notifications",
    },
  ]);
  const [errObj, setErrorObj] = useState({
    message: "",
    show: false,
  });
  const navigation = useNavigation();

  AsyncStorage.getItem("userData").then((value) => {
    user = JSON.parse(value);
    setUser(user);
  });

  const logout = () => {
    AsyncStorage.clear();
    navigation.navigate("SignUp");
  };

  const handleInputChange = (value) => {
    setFriendCode(value);
    if (value.length == 6) {
      const response = friendsService.addFriendByCode({
        code: value,
        user_id: "sfasdfas",
      });
    }
  };
  const handleToggle = (openCamera) => {
    setScanQr(openCamera);
  };
  const handleScanComplete = (message) => {
    setErrorObj((prevState) => ({
      message: message,
      show: true,
    }));
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
        {!scanQr && (
          <View style={styles.qrContentContainer}>
            <Text style={styles.friendCode}>{user?.friendCode}</Text>
            <CustomQR userData={user} />
          </View>
        )}

        {scanQr && (
          <View style={styles.qrContentContainer}>
            <CustomInput
              value={friendCode}
              label="Enter Code"
              maxLength={6}
              onChangeText={(value) => handleInputChange(value)}
            ></CustomInput>

            <CustomQRScanner
              onEvent={handleScanComplete}
              currentUserId={user._id}
            />
          </View>
        )}
      </View>
      <View style={[styles.qrOptionsContainer, styles.card]}>
        <TouchableOpacity
          onPress={() => handleToggle(false)}
          style={[{ alignItems: "center" }, !scanQr && styles.selected]}
        >
          <AntDesign
            name="qrcode"
            size={20}
            color={StylingProperties.darkTextColor}
            style={{ marginBottom: 5 }}
          />
          <Text>My QR Code</Text>
        </TouchableOpacity>
        <View style={styles.verticalDivider}></View>
        <TouchableOpacity
          onPress={() => handleToggle(true)}
          style={[{ alignItems: "center" }, scanQr && styles.selected]}
        >
          <AntDesign
            name="scan1"
            size={20}
            color={StylingProperties.darkTextColor}
            style={{ marginBottom: 5 }}
          />

          <Text>Scan QR Code</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={logout}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>

      {errObj.show && (
        <CustomModal
          message={errObj.message}
          hideModal={() => {
            setErrorObj({ message: "", show: false });
          }}
        ></CustomModal>
      )}
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
    width: "100%",
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
    textTransform: "uppercase",
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
