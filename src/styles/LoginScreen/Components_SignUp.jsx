import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';
import { Dimensions } from 'react-native';

export const containers = StyleSheet.create({
  containerSignUpForm: {
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});

export const inputDefault = StyleSheet.create({
  input: {
    fontSize: 20,
    color: COLORS.GRAY,
    marginTop: Dimensions.get('screen').height / 20000,
    marginBottom: 25,
    fontWeight: WEIGHT.LIGHT,
    fontFamily: 'Nunito_500Medium',
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    width: 330,
    height: 45,
    padding: 10,
    fontSize: 13,
    borderRadius: 8,
  },
});

export const inputPassword = StyleSheet.create({
  inputPass: {
    ...inputDefault.input,
    top: 2,
  },
});

export const formSignUp = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.LIGHT_PURPLE,
    borderRadius: 20,
    width: 150,
    height: 40,
    alignContent: 'center',
    alignSelf: 'center',
    top: Dimensions.get('screen').height / 20000,
  },
  buttonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    top: 8,
  },
  askText: {
    top: 20,
    alignContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Nunito_500Medium',
    color: COLORS.WHITE,
  },
  hyperlink: {
    top: 20,
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
    color: COLORS.WHITE,
  },
});
