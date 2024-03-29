import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../colors";

export const sectionList = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: COLORS.PURPLEPINK,
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: COLORS.WHITE,
    },
    title: {
      fontSize: 24,
    },
    image: {
      width: 100,
      height: 100,
    }
    }
  );