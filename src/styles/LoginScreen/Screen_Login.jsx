import { StyleSheet, Dimensions } from 'react-native';
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
    height: Dimensions.get('screen').height,
  },
  containerForms: {
    top: Dimensions.get('screen').height / 30,
  },
});
