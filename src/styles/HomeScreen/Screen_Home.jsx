import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';


const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24; 
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const StylesHome = StyleSheet.create({
  TopBar:{
    width: "100%",
    position: "relative",
  },
  Content:{    
    width: "100%",
    position: "absolute",
    height: WINDOW_HEIGHT,
    top: 65,
  },
  BottomBar:{
    width: "100%",
    position: "absolute",
    bottom: SCREEN_HEIGHT-(2*STATUS_BAR_HEIGHT+WINDOW_HEIGHT),
  },
  Home:{
    marginTop: Constants.statusBarHeight,
    height:"100%",
    backgroundColor: COLORS.MEDIUM_PURPLE}
});
