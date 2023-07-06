import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

import * as StylingProperties from "../../constants/StylingProperties.js";
const CustomModal = ({ message, hideModal }) => {
  useEffect(() => {
    setTimeout(() => {
      hideModal("hide");
    }, 3000);
  });
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    top: "98%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    pointerEvents: "none",
  },
  modalView: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: StylingProperties.borderRadius,
    flexDirection: "row",
    height: 40,
    backgroundColor: "#D21312",
  },
  modalTitle: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomModal;
