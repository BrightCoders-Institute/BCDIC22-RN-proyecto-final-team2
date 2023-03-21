import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const containers = StyleSheet.create({
  bgContainer: {},
});

export const titles = StyleSheet.create({
  maintitle: {
    top: 25,
    left: 30,
    color: COLORS.WHITE,
    fontSize: 26,
    fontFamily: 'Poppins_600SemiBold',
  },
  amount: {
    color: COLORS.WHITE,
    fontSize: 26,
    fontFamily: 'Nunito_300Light',
  },
  total: {
    color: COLORS.WHITE,
    fontSize: 40,
    fontFamily: 'Nunito_400Regular',
  },
  image: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export const stylesCheckout = StyleSheet.create({
  containerFields: {
    flexDirection: 'column',
    marginTop: 30,
    width: '85%',
    height: 270,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY,
  },
  containerFieldsFirstLast: {
    width: '100%',
  },
  containerFieldsMedium: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
  },
  containerFieldExpiration: {
    width: '40%',
  },
  containerFieldCvv: {
    width: '40%',
  },
  input: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    borderRadius: 15,
  },
  inputMedium: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    textAlignVertical: 'center',
    paddingLeft: '18%',
    padding: 15,
  },
  error: {
    fontSize: 14,
    color: COLORS.RED,
  },
  containerAmount: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    height: '15%',
  },
  containerSub: {
    marginTop: 30,
  },
  containerSubtotal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerShipping: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTot: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  containerTotal: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  continueButton: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.GOLD,
    borderRadius: 20,
    width: '85%',
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    flex: 1,
  },
});
