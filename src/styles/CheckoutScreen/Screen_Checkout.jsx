import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { COLORS } from "../colors";

export const containers = StyleSheet.create({
  bgContainer: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: COLORS.PURPLE,
    height: Dimensions.get("screen").height,
  },
});

export const titles = StyleSheet.create({
  maintitle: {
    top: 45,
    left: 30,
    color: COLORS.WHITE,
    fontSize: 26,
    fontFamily: "Poppins_600SemiBold",
  },
});

export const stylesCheckout = StyleSheet.create({
  containerFields: {
    flex: 0.7,
    marginTop: 40,
    width: "85%",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  input: {
    backgroundColor: COLORS.WHITE,
    padding: 25,
    borderRadius: 15,
  },
  error: {
    fontSize: 14,
    color: COLORS.RED,
  },
  continueButton: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.GOLD,
    borderRadius: 20,
    width: "85%",
    padding: 10,
  },
  textButton: {
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    flex: 1,
  },
});
