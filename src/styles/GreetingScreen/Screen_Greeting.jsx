import { StyleSheet, } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const stylesGreeting = StyleSheet.create({
  containerLogo: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 90
  },

  containerTexts: {
    marginTop: 130
  },

  startedButton: {
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 30,
    marginTop: 180,
    padding: 20,
    width:'55%' ,
  },

  textButton: {
    alignSelf:'center',
    color: COLORS.DARKSLATE_BLUE, 
    fontFamily: 'Poppins_500Medium', 
    fontSize: 22, 
    fontWeight: WEIGHT.BOLD, 
  }
});
