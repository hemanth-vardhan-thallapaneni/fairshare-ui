import axios from "axios";
import { apiHeader } from "../constants/config";

const add = async (requestData) => {
  try {
    console.log("request", requestData);
    const response = await axios.post(apiHeader + "/friends/add", {
      ...requestData,
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    //throw error;
  }
};

export default { add };
