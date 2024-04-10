import axios from "axios";
import { apiHeader } from "../constants/config";

const addFriendByQRCode = async (requestData) => {
  try {
    const response = await axios.post(apiHeader + "/friends/add-qr-friend", {
      ...requestData,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addFriendByCode = async (requestData) => {
  try {
    const response = await axios.post(
      apiHeader + "/friends/add-code-friend",
      requestData
    );
    return response;
  } catch (error) {}
};

export default { addFriendByQRCode, addFriendByCode };
