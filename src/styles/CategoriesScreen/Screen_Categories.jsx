import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';
import Constants from 'expo-constants';

export const containers = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: COLORS.PURPLE,
    height: Dimensions.get('screen').height,
  },
  flatListCont: {
    justifyContent: 'center',
    alignContent: 'center',
    top: 120,
  },
  wrapperStyle: {
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
  },
});

export const elements = StyleSheet.create({
  namePageText: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    color: COLORS.WHITE,
    left: 20,
    top: 80,
  },
});
