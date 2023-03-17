import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: 240,
    height: 40,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    borderColor: COLORS.DARK_PURPLE,
    borderWidth: 1,
  },
  inputSize: {
    width: 200,
  },
});

export const elements = StyleSheet.create({
  iconStyle: {
    fontSize: 15,
    textAlign: 'left',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 5,
    paddingLeft: 10,
  },
});
