import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import Constants from 'expo-constants';

export const containers = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  containerColor: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 850,
  },
  containerForms: {
    top: '7%',
  },
});
