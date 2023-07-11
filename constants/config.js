import { Platform } from "react-native";

const config = {
  apiUrl:
    Platform.OS == "android" ? "http://192.168.0.120" : "http://172.20.10.6",
  port: 3000,
};

export const apiHeader = config.apiUrl + ":" + config.port;
