import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import { Dimensions } from 'react-native';

export const containers = StyleSheet.create({
  containerSelector: {
    flexDirection: 'column',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.MEDIUM_PURPLE,
    borderRadius: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  containerLogo: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3.8,
  },
  containerElements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 260,
    top: Dimensions.get('screen').height / 20,
  },
});

export const content = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  loginText: {
    fontFamily: 'Poppins_500Medium',
    color: COLORS.WHITE,
    fontSize: 18,
  },
  registerText: {
    fontFamily: 'Poppins_500Medium',
    color: COLORS.WHITE,
    fontSize: 18,
  },
});
