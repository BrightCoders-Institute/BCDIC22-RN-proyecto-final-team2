import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/index';
import * as SplashScreen from 'expo-splash-screen';
import { Nunito_500Medium } from '@expo-google-fonts/nunito';
import { Inter_500Medium } from '@expo-google-fonts/inter';
import { Poppins_500Medium } from '@expo-google-fonts/poppins';

import Home from './src/screens/Home.jsx';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_500Medium,
    Inter_500Medium,
    Poppins_500Medium,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return <Navigation />;
}
