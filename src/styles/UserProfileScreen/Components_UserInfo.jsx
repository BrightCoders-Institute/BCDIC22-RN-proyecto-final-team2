import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const containers = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 300,
    width: Dimensions.get('screen').width - 30,
    height: 640,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 30,
  },
  rowContainerDefault: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  rowContainerOrders: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.BRIGHT_GRAY,
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.BRIGHT_GRAY,
    borderRadius: 10,
    width: 180,
    height: 50,
    marginRight: 20,
  },
});

export const elements = StyleSheet.create({
  textSectionTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: COLORS.DARK_PURPLE,
  },
  iconSection: {
    marginLeft: 100,
  },
  dividerSection: {
    color: COLORS.DARK_PURPLE,
    height: 1,
    width: 310,
    alignSelf: 'center',
  },
  inputDefault: {
    fontSize: 20,
    color: COLORS.GRAY,
    marginTop: 10,
    fontFamily: 'Nunito_500Medium',
    fontWeight: WEIGHT.LIGHT,
    borderColor: COLORS.DARK_PURPLE,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    width: 200,
    height: 45,
    padding: 10,
    fontSize: 13,
    borderRadius: 8,
  },
});
