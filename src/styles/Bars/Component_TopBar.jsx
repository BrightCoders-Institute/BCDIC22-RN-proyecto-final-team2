import { StyleSheet, } from 'react-native';
import { COLORS } from '../colors';
import { WEIGHT } from '../fontWeights';

export const StyleTopBar = StyleSheet.create({
  Bar:{
    backgroundColor: COLORS.WHITE,
    height: 65,
    padding: 2,
    flexDirection: "row",
  },

  Cell:{
    flex: 1,
    flexDirection: "row",
  },
  Button: {
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 10,
    flex: 1,
  },
  Icon:{
    fontSize: 35,
    padding: 20,
    flex: 1,
  },
  SearchCell:{
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  SearchBar:{
    width: "100%",
    height: 45,
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
  },
  SearchButton:{
    width: "100%",
    textAlignVertical: "center",
    padding: 10,
    flex: 1,
  },
  SearchInput:{
    height:"100%",
    padding: 5,
    flex: 7,
  },
  SearchIcon:{
    fontSize: 20,
    flex: 1,
  },
})