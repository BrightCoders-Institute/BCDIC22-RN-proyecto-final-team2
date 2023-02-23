import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const textDefault = StyleSheet.create({
    text: {
        color: COLORS.WHITE, 
        fontFamily: 'Nunito_500Medium',
        fontSize: 30,
        fontWeight: WEIGHT.BOLD
      },    
  });
  
  export const text2 = StyleSheet.create({
    text2: {
      ...textDefault.text,
      marginLeft: 35,
    },
  });