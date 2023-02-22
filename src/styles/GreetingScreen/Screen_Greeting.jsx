import { StyleSheet } from 'react-native';

export const stylesGreeting = StyleSheet.create({
  containerLogo: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 90
  },

  containerTexts: {
    marginTop: 130
  },

  text1: {
    color: 'white', 
    fontFamily: 'Nunito_500Medium',
    fontSize: 30,
    fontWeight: 'bold'
  },

  text2: {
    color: 'white', 
    fontFamily: 'Nunito_500Medium',
    fontSize: 30, 
    fontWeight: 'bold',
    marginLeft:35
  },

  startedButton: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 180,
    padding: 20,
    width:'55%' ,
  },

  textButton: {
    alignSelf:'center',
    color: 'darkslateblue', 
    fontFamily: 'Arial', 
    fontSize: 22, 
    fontWeight: 'bold', 
  }
});
