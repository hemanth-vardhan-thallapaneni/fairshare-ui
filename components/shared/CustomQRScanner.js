import { View, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import friendsService from "../../services/friendsService";
import * as stylingProperties from "../../constants/StylingProperties.js";

const CustomQRScanner = ({ currentUserId }) => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log("data", data);
    if (!scanned) {
      let parsedUserData = JSON.parse(data);
      if (parsedUserData) {
        try {
          console.log(parsedUserData);
          setScanned(true);
          const response = friendsService.addFriendByQRCode({
            currentUserId: currentUserId,
            id: parsedUserData._id,
            name: parsedUserData.user_name,
          });
        } catch (error) {}
      }
    }
  };

  useEffect(() => {
    return () => {
      setScanned(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}

      {scanned && (
        <ActivityIndicator
          size="large"
          color={stylingProperties.darkTextColor}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "85%",
    padding: 20,
  },
});

export default CustomQRScanner;
