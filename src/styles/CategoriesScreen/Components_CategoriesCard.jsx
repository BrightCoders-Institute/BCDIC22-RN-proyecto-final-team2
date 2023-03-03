import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const containers = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: 160,
    height: 135,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginBottom: 40,
  },
});

export const elements = StyleSheet.create({
  img: {
    width: 70,
    height: 100,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: COLORS.DARK_PURPLE,
  },
});
