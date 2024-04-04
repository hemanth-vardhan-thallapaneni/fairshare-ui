import { Platform } from "react-native";

const config = {
  apiUrl:
    Platform.OS == "android" ? "http://localhost" : "http://10.193.155.11",
  port: 3000,
};

export const apiHeader = config.apiUrl + ":" + config.port;
