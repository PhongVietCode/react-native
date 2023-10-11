import React from "react";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home"
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RootStack from "./navigators/RootStack";
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  SplashScreen.hideAsync();
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <RootStack />;
}
