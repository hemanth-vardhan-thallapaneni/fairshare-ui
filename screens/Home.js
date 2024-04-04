import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import RecentActivities from "../components/HomeScreen/RecentActivities";
import * as stylingProperties from "../constants/StylingProperties";

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
      <View style={[styles.balanceContainer]}>
        <Text style={styles.header}>Total Balance</Text>
        <Text style={[styles.baseFontStyle, getBackgroundColor()]}>
          ${totalBalance}
        </Text>
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "5%",
  },
  header: {
    fontSize: 15,
    color: stylingProperties.darkTextColor,
    fontWeight: 600,
  },
  baseFontStyle: {
    fontSize: 70,
    fontWeight: 800,
  },
  balancePositive: {
    // backgroundColor: "#2B7A0B",
    color: "#2B7A0B",
  },
  balanceNegative: {
    color: "#B31312",
  },
});

export default Home;
