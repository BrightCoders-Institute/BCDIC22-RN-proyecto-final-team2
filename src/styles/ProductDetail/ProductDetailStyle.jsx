import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const productDetailStyle = StyleSheet.create({
  collapseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  textReview: {
    color: COLORS.WHITE,
    fontSize: 22,
    marginLeft: 20,
  },
  arrowIcon: {
    marginRight: 20,
    color: COLORS.WHITE,
  },
});
