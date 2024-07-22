import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBlackButton from "../../components/customBlackButton";

import LottieView from "lottie-react-native";
import Checkbox from "../../components/Checkbox";
import IconTextInput from "../../components/IconTextInput";
import OTPinput from "../../components/OTPinput";
import { images } from "../../constants";

export default function GetOTP() {
  const [loading, setLoading] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  if (!loading && isLoggedin) {
    return <Redirect href="/home" />;
  }
  return (
    <SafeAreaView className=" bg-softWhite h-full  w-full">
      <View
        className=" "
        contentContainerStyle={{ height: "100%", width: "100%" }}
      >
        <View className="flex flex-col w-full h-full ">
          <View className=" w-full  h-[60%]   justify-around  items-center       ">
            <View className=" w-[90%] h-[55px]">
              <Image
                source={images.fullSizeLogo}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>
            <View className="relative mt-5 ">
              <Text className=" text-3xl font-pmedium   text-center">
                Unclaimed Assets,
              </Text>
              <Text className="text-secondary-200 text-3xl  font-pmedium   text-center">
                Reclaimed Peace
              </Text>
            </View>
            <View className="w-[90%]   ">
              <View className="mb-10">
                {/* <IconTextInput
                  enterKeyHint="enter"
                  inputMode="tel"
                  icon="call"
                  keyboardType="phone-pad"
                  inputType="default"
                  placeholder="Enter your phone to get started"
                /> */}
                <OTPinput />
                <View className="ml-3 mt-[-10px]"></View>
              </View>
              <CustomBlackButton
                handlePress={() => {
                  router.replace("onboarding/plans");
                }}
                title="Continue"
              />
            </View>
          </View>
          {/* lottie file: */}
          <View className="w-full  h-[40%] ">
            {/* <LottieView
              autoPlay
              loop
              style={{ height: "80%" }}
              source={require("../../assets/lottie/0heU1IzlcA.json")}
            /> */}
          </View>
        </View>
      </View>
      <StatusBar backgroundColor="#f8f8f8" style="dark" />
    </SafeAreaView>
  );
}
