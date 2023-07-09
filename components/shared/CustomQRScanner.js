import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
const CustomQRScanner = () => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      setScanned(true);
      alert(`Scanned barcode with type ${type} and data ${data}`);
    }
  };

  useEffect(() => {
    return () => {
      setScanned(false);
    };
  }, "");

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
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
