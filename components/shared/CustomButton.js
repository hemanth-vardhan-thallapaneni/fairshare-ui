import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import React from "react";
import * as StylingProperties from "../../constants/StylingProperties.js";

const CustomButton = ({ title, width, type, onClick }) => {
  const buttonStyle =
    type === "flat" ? styles.flatButton : styles.strokedButton;
  const textStyle = type === "flat" ? "" : styles.strokedButtonText;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <View
        style={[
          styles.commonButton,
          buttonStyle,
          { width: width ? width : "90%" },
        ]}
      >
        <Text style={[styles.buttonTitle, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  commonButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: StylingProperties.borderRadius,
    height: 50,
    borderWidth: 2,
    borderColor: StylingProperties.borderColor,
  },
  buttonTitle: {
    fontSize: 16,
    color: StylingProperties.lightTextColor,
  },
  strokedButtonText: {
    color: StylingProperties.primaryColor,
  },
  flatButton: {
    backgroundColor: StylingProperties.primaryColor,
  },
  strokedButton: {},
});

export default CustomButton;
