import { COLORS } from '../styles/colors';
import { DefaultTheme } from '@react-navigation/native';

export const navTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    background: COLORS.PURPLE,
    primary: COLORS.DARK_PURPLE,
    card: COLORS.WHITE,
    text: COLORS.DARK_PURPLE,
  },
};
