import {
  View,
  Text,
  Animated,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const NewExpense = () => {
  const navigation = useNavigation();
  const sizeAnimation = useState(new Animated.Value(0))[0];
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
          <View style={styles.expensePic} />
          <Text style={styles.expenseName}>Yaswanth & +1 </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  expenseContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
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
  },
  expensePic: {
    backgroundColor: "#D5B4B4",
    width: 100,
    height: 100,
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
});

export default NewExpense;
