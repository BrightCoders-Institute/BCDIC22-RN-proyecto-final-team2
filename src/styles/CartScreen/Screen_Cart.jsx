import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  mainContainer: {
    marginBottom: 140,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.GOLD,
    borderRadius: 20,
    width: '85%',
    padding: 10,
  },
});

export const elements = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    color: COLORS.WHITE,
    left: 20,
    top: 10,
  },
  itemSeparatorStyle: {
    marginBottom: 15,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    flex: 1,
  },
});
