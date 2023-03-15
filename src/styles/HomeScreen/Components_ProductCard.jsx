import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    height: 250,
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  buttonBuy: {
    top: 20,
    marginLeft: 10,
    width: 120,
    height: 30,
    backgroundColor: COLORS.DARK_PURPLE,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonAddToCart: {
    top: 35,
    marginLeft: 10,
    width: 120,
    height: 30,
    backgroundColor: COLORS.WHITE,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
  },
});

export const elements = StyleSheet.create({
  productImage: {
    width: 120,
    height: 180,
    marginLeft: 10,
    marginTop: 30,
  },
  favoriteIcon: {
    marginLeft: 125,
    top: 10,
  },
  productTitle: {
    marginLeft: 10,
    fontSize: 22,
    fontFamily: 'Inter_700Bold',
  },
  textFranchise: {
    top: 5,
    marginLeft: 10,
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  textEdition: {
    top: 5,
    marginLeft: 10,
    color: 'grey',
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  productFranchise: {
    color: 'grey',
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  textCategory: {
    top: 5,
    marginLeft: 10,
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  productCategory: {
    color: 'grey',
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  productReviewsCount: {
    color: 'grey',
    fontSize: 11,
    fontFamily: 'Poppins_600SemiBold',
  },
  productRating: {
    marginRight: 35,
    top: 6,
  },
  productPrice: {
    top: 9,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
  },
  textButtonBuy: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
  },
  textButtonAddToCart: {
    color: COLORS.DARK_PURPLE,
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
  },
  cartIcon: {
    left: 5,
  },
});
