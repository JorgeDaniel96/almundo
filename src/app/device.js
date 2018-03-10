import { Dimensions, Platform } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Device {
  static width = WIDTH;
  static height = HEIGHT;
  static isAndroid = Platform.OS === "android";
}
