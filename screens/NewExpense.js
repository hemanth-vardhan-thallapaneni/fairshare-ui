import {
  View,
  Text,
  Animated,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as StylingProperties from "../constants/StylingProperties.js";
import CustomButton from "../components/shared/CustomButton.js";
const jsonData = require("../assets/data/activitiesData.json");

const NewExpense = () => {
  const navigation = useNavigation();
  const sizeAnimation = useState(new Animated.Value(0))[0];
  const categories = jsonData.categories;
  const friends = jsonData.friends;
  useEffect(() => {
    function startAnimation() {
      Animated.parallel([
        Animated.timing(sizeAnimation, {
          toValue: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
    startAnimation();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Animated.View
        style={[
          {
            height: 15,
            width: 15,
            position: "absolute",
            right: 100,
            backgroundColor: "#594545",
            borderRadius: 50,
          },
          {
            transform: [{ scaleX: sizeAnimation }, { scaleY: sizeAnimation }],
          },
        ]}
      ></Animated.View>
      <View style={styles.expenseContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Feather
              name="arrow-left"
              size={24}
              color="#F5EBEB"
              onPress={goBack}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.addExpenseContainer}>
          <Text style={styles.title}>New Expense</Text>
          <View style={styles.expenseInputContainer}>
            <Text style={styles.currency}>$</Text>
            <TextInput
              style={[styles.currency]}
              keyboardType="numeric"
            ></TextInput>
          </View>
          <TextInput
            style={styles.moneyForText}
            placeholder="What's this for?"
            placeholderTextColor={StylingProperties.lightTextColor}
          ></TextInput>
          <View style={{ width: "90%" }}>
            <ScrollView horizontal={true}>
              <View style={styles.friendsList}>
                {friends.map((friend, index) => (
                  <View key={index} style={styles.friendContainer}>
                    <View style={styles.expensePic} />
                    <Text style={styles.expenseName}> {friend.name} </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={{ width: "90%" }}>
            <ScrollView horizontal={true}>
              <View style={styles.categroiesList}>
                {categories.map((category, index) => (
                  <View key={index} style={styles.categoryContainer}>
                    <Text style={styles.categoryName}>{category.name} </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: "65%", width: "100%" }}>
          <CustomButton
            //onClick={() => onSubmit()}
            title={"Add Expense"}
            type="flat"
            width="90%"
          ></CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  expenseContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    padding: 10,
  },
  headerContainer: {
    display: "flex",
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  addExpenseContainer: {
    marginTop: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    width: "100%",
  },
  expensePic: {
    backgroundColor: "#D5B4B4",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    color: "#F5EBEB",
    fontSize: 20,
    fontWeight: "bold",
  },
  expenseName: {
    color: "#F5EBEB",
  },
  expenseInputContainer: {
    width: "80%",
    fontSize: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // borderBottomWidth: 2,
    borderColor: StylingProperties.lightTextColor,
  },
  moneyForText: {
    fontSize: 20,
    color: StylingProperties.lightTextColor,
  },
  currency: {
    fontSize: 100,
    color: StylingProperties.lightTextColor,
  },
  friendsList: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 20,
  },
  friendContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  categroiesList: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  categoryContainer: {
    borderRadius: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: StylingProperties.lightBackgroundColor,
  },
  categoryName: {
    color: StylingProperties.lightTextColor,
  },
});

export default NewExpense;
