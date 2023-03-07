import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.35,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.LIGHT_PURPLE,
    borderRadius: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export const elements = StyleSheet.create({
  textTitle: {
    fontSize: 25,
    fontFamily: 'Poppins_600SemiBold',
    position: 'relative',
    color: COLORS.WHITE,
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  userNameText: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    position: 'relative',
    color: COLORS.WHITE,
  },
  userEmailText: {
    fontSize: 15,
    fontFamily: 'Inter_600SemiBold',
    position: 'relative',
    color: COLORS.WHITE,
  },
  userIcon: {
    marginTop: 20,
  },
});
