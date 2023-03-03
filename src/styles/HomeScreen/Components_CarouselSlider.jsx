import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const containers = StyleSheet.create({
  containerIndicator: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    alignSelf: 'center',
  },
});

export const stateIndicator = StyleSheet.create({
  stateActive: {
    color: COLORS.BRIGHT_PURPLE,
    margin: 2,
  },
  stateInactive: {
    color: COLORS.WHITE,
    margin: 2,
  },
});
