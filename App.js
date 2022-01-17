import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import RootNavigation from './app/screens/RootNavigation';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lobster': require('./app/assets/fonts/Pushster/Lobster.ttf'),
    'PoppinsBL': require('./app/assets/fonts/Poppins/Poppins-Black.ttf'),
    'PoppinsBO': require('./app/assets/fonts/Poppins/Poppins-Bold.ttf'),
    'PoppinsEB': require('./app/assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'PoppinsEL': require('./app/assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'PoppinsL': require('./app/assets/fonts/Poppins/Poppins-Light.ttf'),
    'PoppinsM': require('./app/assets/fonts/Poppins/Poppins-Medium.ttf'),
    'PoppinsR': require('./app/assets/fonts/Poppins/Poppins-Regular.ttf'),
    'PoppinsSB': require('./app/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'PoppinsT': require('./app/assets/fonts/Poppins/Poppins-Thin.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});