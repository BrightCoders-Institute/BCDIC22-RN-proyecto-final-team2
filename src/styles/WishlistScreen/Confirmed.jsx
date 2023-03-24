import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import Constants from "expo-constants";
import { Dimensions } from 'react-native';

export const ConfirmedWish = StyleSheet.create({
  container:{
    top: Dimensions.get('window').height - 200,
  },
  message:{
    textAlignVertical: "center",
    textAlign: "center",
    color: COLORS.GRAY,
    height: 53,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: COLORS.LIGHT_GRAY,
  },
})