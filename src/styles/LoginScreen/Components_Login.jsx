import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const containers = StyleSheet.create({
  containerLoginForm: {
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});

export const inputDefault = StyleSheet.create({
  input: {
    fontSize: 20,
    color: COLORS.GRAY,
    marginTop: 10,
    fontFamily: 'Nunito_500Medium',
    fontWeight: WEIGHT.LIGHT,
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    width: 330,
    height: 45,
    padding: 10,
    fontSize: 13,
    marginBottom: 10,
    borderRadius: 8,
  },
});

export const inputPassword = StyleSheet.create({
  inputPass: {
    ...inputDefault.input,
    top: 15,
  },
});

export const formLogin = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.LIGHT_PURPLE,
    borderRadius: 20,
    width: 150,
    height: 40,
    alignContent: 'center',
    alignSelf: 'center',
    top: 25,
  },
  buttonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Poppins_500Medium',
    fontWeight: WEIGHT.HEAVY,
    fontSize: 16,
    top: 8,
  },
  askText: {
    top: 40,
    alignContent: 'center',
    fontFamily: 'Nunito_500Medium',
    alignSelf: 'center',
    color: COLORS.WHITE,
  },
  hyperlink: {
    top: 40,
    alignContent: 'center',
    alignSelf: 'center',
    fontWeight: WEIGHT.BOLD,
    fontFamily: 'Nunito_500Medium',
    color: COLORS.WHITE,
  },
});
