import { View, Text, StyleSheet, useState } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QRCode from "react-native-qrcode-svg";
import * as StylingProperties from "../../constants/StylingProperties.js";

const CustomQR = () => {
  AsyncStorage.getItem("userData").then((value) => {
    //setqrCodeValue(value || "");
  });
  return (
    <View style={styles.qrCode}>
      <QRCode
        color={StylingProperties.darkTextColor}
        backgroundColor="transparent"
        value="sdf"
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
