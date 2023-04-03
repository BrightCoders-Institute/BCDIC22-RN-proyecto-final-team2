import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  dropDownContainer: {
    position: 'absolute',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: COLORS.EXTRALIGHT_PURPLE,
    borderWidth: 1,
    width: 233,
    height: 200,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  noResultsContainer: {
    position: 'absolute',
    paddingHorizontal: '11%',
    backgroundColor: COLORS.EXTRALIGHT_PURPLE,
    marginVertical: 5,
    height: 45,
    width: 210,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  resultsContainer: {
    position: 'relative',
    paddingHorizontal: '11%',
    backgroundColor: COLORS.EXTRALIGHT_PURPLE,
    marginVertical: 5,
    height: 45,
    width: 210,
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  productContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export const elements = StyleSheet.create({
  noResultsText: {
    color: COLORS.WHITE,
    fontFamily: 'Poppins_500Medium',
  },
  imageStyle: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: -15,
  },
  textStyle: {
    color: COLORS.WHITE,
    fontFamily: 'Poppins_500Medium',
  },
});
