import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  bgContainer: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: COLORS.PURPLE,
    height: Dimensions.get('screen').height,
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    flex: 1,
  },
  productsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginLeft: 40,
    padding: 10,
    marginBottom: 100,
    marginRight: Dimensions.get('screen').height / 2,
  },
  itemSeparator: {
    width: 20,
  },
  franchiseCards: {
    marginBottom: 10,
  },
});

export const titles = StyleSheet.create({
  maintitle: {
    color: COLORS.WHITE,
    fontSize: 25,
    fontFamily: 'Poppins_600SemiBold',
    bottom: 10,
  },
  titleFranchise: {
    color: COLORS.WHITE,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
