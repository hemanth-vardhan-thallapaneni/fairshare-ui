import axios from "axios";
import { apiHeader } from "../constants/config";

const signIn = async (email, password) => {
  try {
    const response = await axios.post(apiHeader + "/auth/signin", {
      email,
      password,
    });

    return response.data; // Return the response data or handle it as per your requirement
  } catch (error) {
    return error;
  }
};

const signUp = async (email, password) => {
  const url = apiHeader + "/auth/signup";
  try {
    const response = await axios.post(
      "http://192.168.86.119:3000/auth/signup",
      {
        email,
        password,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { signIn, signUp };
