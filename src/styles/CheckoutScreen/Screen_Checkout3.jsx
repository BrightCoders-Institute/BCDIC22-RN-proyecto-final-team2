import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const titles = StyleSheet.create({
  maintitle: {
    textAlign: "center",
    top: 45,
    color: COLORS.WHITE,
    fontSize: 35,
    fontFamily: "Nunito_700Bold",
  },
  textOrder: {
    textAlign: "center",
    top: 70,
    color: COLORS.WHITE,
    fontSize: 22,
    fontFamily: "Nunito_600SemiBold",
  },

  image: {
    marginTop: 20,
    alignSelf: "center",
  },
});

export const stylesCheckout = StyleSheet.create({
  continueButton: {
    marginTop: 120,
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
