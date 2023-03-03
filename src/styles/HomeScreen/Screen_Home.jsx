import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { COLORS } from '../colors';
import Constants from 'expo-constants';

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24; 
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const containers = StyleSheet.create({
  bgContainer: {
    /* marginTop: Constants.statusBarHeight, */
    backgroundColor: COLORS.PURPLE,
    height: WINDOW_HEIGHT-70,
    /* height: Dimensions.get('screen').heightA, */
    justifyContent: 'space-evenly',
  },
  productsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginRight: 40,
    marginLeft: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 50,
    marginRight: Dimensions.get('screen').height / 2,
  },
  itemSeparator: {
    width: 20,
  },
});

export const elements = StyleSheet.create({
  titleBestSellers: {
    top: 25,
    left: 20,
    color: COLORS.WHITE,
    fontSize: 23,
    fontFamily: 'Poppins_600SemiBold',
  },
  titleRecentlyAdded: {
    top: Dimensions.get('screen').height * 0.03-15,
    left: 20,
    color: COLORS.WHITE,
    fontSize: 23,
    fontFamily: 'Poppins_600SemiBold',
  },
});
