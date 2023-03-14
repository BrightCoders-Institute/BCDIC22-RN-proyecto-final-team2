import { StyleSheet, Dimensions } from 'react-native';

export const containers = StyleSheet.create({
  bgContainer: {
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
    marginTop: 30,
    marginRight: Dimensions.get('screen').height / 2,
  },
  itemSeparator: {
    width: 20,
  },
});

export const elements = StyleSheet.create({
  titleBestSellers: {
    top: 5,
    left: 20,
    color: 'white',
    fontSize: 23,
    fontFamily: 'Poppins_600SemiBold',
  },
  titleRecentlyAdded: {
    top: Dimensions.get('screen').height * 0.03,
    left: 20,
    color: 'white',
    fontSize: 23,
    fontFamily: 'Poppins_600SemiBold',
  },
});
