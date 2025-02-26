import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { customTheme } from "../theme";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-ExtraLight": require("../assets/fonts/Montserrat-ExtraLight.ttf"),
    "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Thin": require("../assets/fonts/Montserrat-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <PaperProvider theme={customTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} />*/}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="onboarding/getOTP"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding/plans"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding/Registration"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile/myAccount"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile/subscription"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile/orderHistory"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile/payments"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="profile/setting" options={{ headerShown: false }} />
      </Stack>
      {/* <Stack.Screen name="+not-found" /> */}
    </PaperProvider>
  );
};

export default RootLayout;
