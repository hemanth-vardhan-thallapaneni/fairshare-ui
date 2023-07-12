import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QRCode from "react-native-qrcode-svg";
import * as StylingProperties from "../../constants/StylingProperties.js";

const CustomQR = (userId) => {
  const [user, setUser] = useState("none");
  useEffect(() => {
    setUser(userId || "none");
    console.log(user);
  }, []);

  return (
    <View style={styles.qrCode}>
      <QRCode
        color={StylingProperties.darkTextColor}
        backgroundColor="transparent"
        value="{user}"
        size="2000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCode: {
    height: 200,
    width: 200,
  },
});

export default CustomQR;
