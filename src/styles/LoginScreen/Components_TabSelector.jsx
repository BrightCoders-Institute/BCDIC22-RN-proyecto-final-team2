import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  containerSelector: {
    flexDirection: 'row',
    width: 400,
    height: 320,
    justifyContent: 'space-between',
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
  },
  containerElements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 260,
    top: '12%',
  },
});

export const content = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  loginTab: {},
  loginText: {
    fontFamily: 'Nunito_500Medium',
    color: COLORS.WHITE,
    fontSize: 20,
  },
  registerTab: {},
  registerText: {
    fontFamily: 'Nunito_500Medium',
    color: COLORS.WHITE,
    fontSize: 20,
  },
});
