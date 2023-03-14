import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  container: {
    marginBottom: 55,
  },
  flatListCont: {
    justifyContent: 'center',
    alignContent: 'center',
    top: 40,
  },
  wrapperStyle: {
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
  },
});

export const elements = StyleSheet.create({
  namePageText: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    color: COLORS.WHITE,
    left: 20,
    top: 10,
  },
});
