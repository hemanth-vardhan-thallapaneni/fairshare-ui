import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/shared/CustomButton";
import CustomInput from "../components/shared/CustomInput";
import CustomModal from "../components/shared/CustomModal";
import * as StylingProperties from "../constants/StylingProperties.js";
import { signIn, signUp } from "../services/authService";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const navigation = useNavigation();
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [errObj, setErrorObj] = useState({
    message: "",
    show: false,
  });
  const signInOptions = [
    {
      title: "Google",
      logo: require("../assets/images/google_icon.png"),
    },
    {
      title: "Apple",
      logo: require("../assets/images/apple_icon.png"),
    },
  ];

  const [signUpForm, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (inputName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [inputName]: value,
    }));
  };

  const onSubmit = async () => {
    console.log("here");
    try {
      let response = {};
      let user = {};
      if (isExistingUser) {
        response = await signIn(signUpForm.email, signUpForm.password);
        user = response?.userObj || null;
      } else {
        response = await signUp(signUpForm.email, signUpForm.password);
        user = response.data?.userObj || null;
      }
      if (user) {
        await AsyncStorage.setItem("userData", JSON.stringify(user));

        navigation.navigate("TabStack");
      } else if (
        response.response.data.error === "Invalid username or password"
      ) {
        setErrorObj((prevState) => ({
          message: response.response.data.error,
          show: true,
        }));
      } else if (response.response.data.error === "User already exists") {
        setErrorObj((prevState) => ({
          message: response.response.data.error,
          show: true,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpTitle}>Welcome to {"  "} FairShare!</Text>
        <CustomInput
          value={signUpForm.email}
          label="Email"
          type="email-address"
          validator={{ type: "email", required: true }}
          onChangeText={(value) => handleInputChange("email", value)}
        ></CustomInput>
        <CustomInput
          value={signUpForm.password}
          hideInput={true}
          label="Password"
          validator={{ type: "password", required: true }}
          onChangeText={(value) => handleInputChange("password", value)}
        ></CustomInput>

        <CustomButton
          style={{ marginTop: 200 }}
          onClick={() => onSubmit()}
          title={isExistingUser ? "Login" : "Sign Up"}
          type="flat"
          width="92%"
        ></CustomButton>
        <TouchableOpacity
          onPress={() => {
            setIsExistingUser(!isExistingUser);
          }}
        >
          <Text style={styles.hyperLink}>
            {isExistingUser ? "New User?" : "Already a user?"}{" "}
          </Text>
        </TouchableOpacity>
        <Text style={{ color: StylingProperties.primaryColor }}>Or</Text>
        {signInOptions.map((option, index) => {
          return (
            <View key={index} style={styles.signInOptionsContainer}>
              <Image style={styles.optionIcon} source={option.logo} />
              <Text style={styles.optionTitle}>
                Continue with {option.title}
              </Text>
            </View>
          );
        })}
      </View>
      {errObj.show && (
        <CustomModal
          message={errObj.message}
          hideModal={() => {
            setErrorObj({ message: "", show: false });
          }}
        ></CustomModal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 10,
    gap: 20,
  },
  signUpTitle: {
    fontSize: 45,
    fontWeight: 800,
    alignSelf: "flex-start",
    marginLeft: 20,
    color: StylingProperties.backgroundColor,
  },
  signInOptionsContainer: {
    width: "90%",
    height: 50,
    color: StylingProperties.primaryColor,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    borderWidth: 2,
    borderRadius: StylingProperties.borderRadius,
    borderColor: StylingProperties.borderColor,
    padding: 5,
  },
  optionIcon: {
    height: 25,
    width: 25,
    backgroundColor: "transparent",
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: StylingProperties.primaryColor,
  },
});

export default SignUp;
