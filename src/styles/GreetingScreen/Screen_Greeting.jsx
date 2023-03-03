import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const stylesGreeting = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    flex: 1,
  },

  textStyle: {
    textAlign: 'center',
    color: COLORS.WHITE,
    fontFamily: 'Nunito_500Medium',
    fontSize: 30,
  },

  startedButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 25,
    height: 50,
    width: 230,
  },

  textButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: COLORS.DARK_PURPLE,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
});
