import { StyleSheet } from "react-native";
import Device from "~/src/app/device";

export default StyleSheet.create({
  containerSearch: {
    backgroundColor: "#f1f1f1",
    width: Device.width,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center"
  },
  searchIco: {
    position: "absolute",
    left: "6%",
    top: 25,
    zIndex: 1
  },
  closeIco: {
    position: "absolute",
    right: "6%",
    top: 25,
    zIndex: 1
  },
  textInput: {
    borderRadius: 3,
    height: 42,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.08)",
    backgroundColor: "white",
    width: "100%",
    fontSize: 14,
    paddingLeft: "15%",
    paddingRight: "25%"
  },
  shadow: {
    shadowColor: "0 14px 28px rgba(0,0,0,0.30)",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 0
    }
  }
});
