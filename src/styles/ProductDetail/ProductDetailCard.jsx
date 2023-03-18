import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const productDetailStyle = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    height: 400,
    width: 325,
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    flexWrap: "wrap",
    marginTop: 40,
  },
  imageProduct: {
    width: 125,
    height: 350,
    resizeMode: "contain",
  },
  descriptionProduct: {
    textAlign: "justify",
    fontSize: 15,
    width: 180,
    padding: 12,
    color: "gray",
  },
  starContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
  },
  priceProduct: {
    top: 1,
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    paddingHorizontal: 18,
  },
  heartIcon: {
    marginLeft: 150,
    marginVertical: 8,
  },
  buttonBuy: {
    top: 20,
    marginLeft: 10,
    width: 120,
    height: 30,
    backgroundColor: COLORS.DARK_PURPLE,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  buttonAddToCart: {
    top: 35,
    marginLeft: 10,
    width: 120,
    height: 30,
    backgroundColor: COLORS.WHITE,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
  },
});
