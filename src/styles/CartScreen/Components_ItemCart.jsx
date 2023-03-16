import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 10,
  },
  itemsContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  productDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  counterContainer: {
    marginRight: 10,
  },
});

export const elements = StyleSheet.create({
  imageStyles: {
    width: 90,
    height: 120,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 22,
    fontFamily: 'Inter_700Bold',
  },
  franchiseText: {
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  productFranchise: {
    color: COLORS.BRIGHT_GRAY,
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  categoryText: {
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  productCategory: {
    color: COLORS.BRIGHT_GRAY,
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  priceText: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
  },
  descriptionText: {
    fontSize: 10,
    fontFamily: 'Poppins_500Medium',
    color: COLORS.GRAY,
  },
  counterButtonStyle: {
    backgroundColor: COLORS.BRIGHT_GRAY,
    borderRadius: 30,
    borderWidth: 0,
    minWidth: 18,
    minHeight: 18,
  },
  counterButtonTextStyle: {
    color: COLORS.DARK_PURPLE,
    fontSize: 13,
  },
  counterCountTextStyle: {
    color: COLORS.DARK_PURPLE,
    fontSize: 13,
  },
  deleteButtonStyle: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});
