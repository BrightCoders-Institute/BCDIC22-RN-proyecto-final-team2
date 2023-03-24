import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const addProductReviewStyle = StyleSheet.create({
  textReviewProduct: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 15,
    fontWeight: "700",
  },
  ratingStyle: {
    alignSelf: "flex-start",
    marginHorizontal: 15,
    marginVertical: 5,
  },
  inputReview: {
    padding: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    margin: 15,
    color: "white",
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 25,
    marginHorizontal: 15,
    alignSelf: "flex-start",
    marginBottom: 25,
    borderRadius: 20,
  },
  snackbarError: { backgroundColor: COLORS.RED },
  snackbarSuccess: { backgroundColor: COLORS.DARK_PURPLE },
});
