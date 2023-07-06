import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import * as StylingProperties from "../../constants/StylingProperties.js";
import { useState } from "react";

const CustomInput = ({
  value,
  label,
  type,
  hideInput,
  onChangeText,
  validator,
}) => {
  const [isError, setIsError] = useState(true);

  const handleChange = (event) => {
    const checkValidation = () => {
      let regex = "";
      if (validator.type === "email") {
        regex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      } else if (validator.type === "password") {
        regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
      }
      let result = regex.test(event);
      setIsError(result);
    };
    if (validator) checkValidation();
    onChangeText(event);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.baseStyles,
          { borderColor: !isError ? "#F24C3D" : StylingProperties.borderColor },
        ]}
        onChangeText={handleChange}
        value={value}
        placeholder={label}
        secureTextEntry={hideInput || false}
        keyboardType={type || "default"}
      />

      {isError === false ? (
        <View>
          <Text style={styles.errorMessage}>
            {`Please check your ${label.toLowerCase()}`}.
            {label === "Password" ? (
              <Text style={styles.errorMessage}>
                {" "}
                Password must contain at least one lowercase letter, one
                uppercase letter, one digit, one special character, and be at
                least 8 characters long.
              </Text>
            ) : null}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    height: 50,
  },
  baseStyles: {
    height: "100%",
    borderWidth: 2,
    borderColor: StylingProperties.borderColor,
    borderRadius: StylingProperties.borderRadius,
    padding: 10,
  },
  errorMessage: {
    marginLeft: 5,
    color: "#F24C3D",
    fontSize: 10,
  },
});

export default CustomInput;
