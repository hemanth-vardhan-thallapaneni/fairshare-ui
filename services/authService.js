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
    return { statusCode: error.response.status, error: error.response.data };
  }
};

const signUp = async (email, password) => {
  const url = apiHeader + "/auth/signup";
  try {
    const response = await axios.post(url, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error)
    return { statusCode: error.response.status, error: error.response.data };
  }
};

export { signIn, signUp };
