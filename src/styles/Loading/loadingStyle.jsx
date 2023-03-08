import { StyleSheet } from "react-native";

export const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 250,
  },
  horizontal: {
    flexDirection: "column",
    padding: 10,
  },
  loadingText: {
    color: "white",
  },
});
