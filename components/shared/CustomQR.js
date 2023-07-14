import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import QRCode from "react-native-qrcode-svg";
import * as StylingProperties from "../../constants/StylingProperties.js";

const CustomQR = ({ userData }) => {
  const [user, setUser] = useState("none");
  useEffect(() => {
    setUser(JSON.stringify(userData) || "none");
  }, []);
  return (
    <View style={styles.qrCode}>
      <QRCode
        color={StylingProperties.darkTextColor}
        backgroundColor="transparent"
        value={user}
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
