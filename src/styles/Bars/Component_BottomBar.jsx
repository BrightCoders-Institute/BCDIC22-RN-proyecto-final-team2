import { StyleSheet, } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const StyleBottomBar = StyleSheet.create({
    Bar:{
      flexDirection: "row",
      backgroundColor: COLORS.WHITE,
    },
    Cell:{
      flex: 1,
      flexDirection: "row",
    },
    Button: {
      width: "100%",
      textAlign: "center",
      textAlignVertical: "center",
      padding: 10,
      flex: 1,
    },
    Icon:{
      fontSize: 35,
      padding: 20,
      flex: 1,
    },

    SelectedBar:{
      height: 5,
      width: "100%",
      backgroundColor: COLORS.BRIGHT_PURPLE,
      position: "absolute"
    },

    NotSelectedBar:{
      height: 5,
      width: "100%",
      backgroundColor: COLORS.GRAY,
      position: "absolute"
    }
})