import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import RecentActivities from "../components/HomeScreen/RecentActivities";

const Home = () => {
  const [totalBalance, setTotalBalance] = useState(145);
  const getBackgroundColor = () => {
    if (totalBalance > 0) {
      return styles.balancePositive;
    }
    return styles.balanceNegative;
  };
  return (
    <View style={styles.homeContainer}>
      <View style={[styles.balanceContainer, getBackgroundColor()]}>
        <Text style={styles.baseFontStyle}>Total Balance</Text>
        <Text style={styles.baseFontStyle}>${totalBalance}</Text>
      </View>

      <RecentActivities />
    </View>
  );
};
// const getTotalBalance = () =>{
//     let totalBalance = 40;
//     return
// }

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  balanceContainer: {
    width: "95%",
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    padding: "5%",
    borderColor: "thistle",
    borderRadius: 10,
  },
  baseFontStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  balancePositive: {
    backgroundColor: "#2B7A0B",
    borderColor: "#3D8361",
  },
  balanceNegative: {
    backgroundColor: "#B31312",
  },
});

export default Home;
