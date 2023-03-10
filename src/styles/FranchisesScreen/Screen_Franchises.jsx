import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { COLORS } from "../colors";

export const containers = StyleSheet.create({
  bgContainer: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: COLORS.PURPLE,
    height: Dimensions.get("screen").height,
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
    flex: 1,
  },
  productsContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    marginRight: 40,
    marginLeft: 40,
    padding: 10,
    marginTop: 50,
    marginBottom: -10,
    marginRight: Dimensions.get("screen").height / 2,
  },
  itemSeparator: {
    width: 20,
  },
});

export const titles = StyleSheet.create({
  maintitle: {
    color: "white",
    fontSize: 25,
    padding: 20,
    paddingHorizontal: 0,
    fontWeight: "bold",
  },
  titleFranchise: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
