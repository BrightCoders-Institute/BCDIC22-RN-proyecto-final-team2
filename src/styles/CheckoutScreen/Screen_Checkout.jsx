import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  bgContainer: {
    marginBottom: 70,
  },
});

export const titles = StyleSheet.create({
  maintitle: {
    top: 30,
    left: 30,
    color: COLORS.WHITE,
    fontSize: 26,
    fontFamily: 'Poppins_600SemiBold',
  },
  image: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export const stylesCheckout = StyleSheet.create({
  containerFields: {
    marginTop: 40,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    marginBottom: 30,
    borderRadius: 15,
  },
  error: {
    fontSize: 14,
    color: COLORS.RED,
  },
  continueButton: {
    marginTop: 10,
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
