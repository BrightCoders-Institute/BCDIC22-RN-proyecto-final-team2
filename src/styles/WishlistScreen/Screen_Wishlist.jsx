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
    marginLeft: 40,
    padding: 10,
    marginTop: 0,
    marginRight: Dimensions.get("screen").height / 2,
  },
  itemSeparator: {
    width: 20,
  },
});

export const titles = StyleSheet.create({
  maintitle: {
    top: 45,
    left: 30,
    color: "white",
    fontSize: 26,
    fontFamily: "Poppins_600SemiBold",
  },
  titleFranchise: {
    top: 50,
    left: 30,
    color: "white",
    fontSize: 23,
    fontFamily: "Poppins_600SemiBold",
  },
});
