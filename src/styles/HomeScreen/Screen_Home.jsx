import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { COLORS } from "../colors";

export const containers = StyleSheet.create({
  bgContainer: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: COLORS.PURPLE,
    height: Dimensions.get("screen").height,
    justifyContent: "space-evenly",
  },
  productsContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    marginRight: 40,
    marginLeft: 5,
    padding: 10,
    marginTop: 30,
    marginBottom: 50,
    marginRight: Dimensions.get("screen").height / 2,
  },
  itemSeparator: {
    width: 20,
  },
});

export const elements = StyleSheet.create({
  titleBestSellers: {
    top: 55,
    left: 20,
    color: "white",
    fontSize: 23,
    fontFamily: "Poppins_600SemiBold",
  },
  subtitleBestSellers: { fontSize: 18 },
  titleRecentlyAdded: {
    top: Dimensions.get("screen").height * 0.03,
    left: 20,
    color: "white",
    fontSize: 18,

    fontFamily: "Poppins_600SemiBold",
  },
});
