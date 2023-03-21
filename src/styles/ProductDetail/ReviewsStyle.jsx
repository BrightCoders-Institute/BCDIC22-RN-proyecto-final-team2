import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const reviewStyle = StyleSheet.create({
  reviewContainer: {
    width: "90%",
    marginHorizontal: 20,
    height: 100,
    backgroundColor: COLORS.WHITE50,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 15,
    marginTop: 10,
    alignSelf: "center",
  },
  ratingContainer: { flexDirection: "row" },
  usernameStyle: {
    fontWeight: "700",
    color: COLORS.DARK_PURPLE,
  },
  description: { color: COLORS.WHITE50, fontSize: 12 },
  date: { marginTop: "auto", color: COLORS.LIGHT_PURPLE },
});
