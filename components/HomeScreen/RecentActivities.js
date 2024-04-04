import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
const jsonData = require("../../assets/data/activitiesData.json");

const RecentActivities = () => {
  const activitesData = jsonData.recent_activites;

  return (
    <View style={styles.activitiesContainer}>
      {activitesData.map((item) => (
        <View key={item.name} style={styles.activityCard}>
          <View style={styles.activityCard.activityInfo}>
            <Image
              style={styles.activityCard.profilePic}
              source={require("../../assets/1.jpeg")}
            />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.group}</Text>
            </View>
          </View>
          <View
            style={[
              {
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: 15,
              },
            ]}
          >
            <Text style={[]}>$ {item.amount}</Text>
            <Image
              style={styles.activityCard.nextButton}
              source={require("../../assets/icons/next.png")}
            ></Image>
          </View>
        </View>
      ))}

      <Text>End of activites.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  activitiesContainer: {
    width: "100%",

    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 5,
    padding: 10,
  },
  activityCard: {
    width: "100%",
    backgroundColor: "#FFF8EA",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    activityInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      gap: 10,
      flexDirection: "row",
    },
    profilePic: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
    nextButton: {
      height: 25,
      width: 25,
    },
  },
});

export default RecentActivities;
