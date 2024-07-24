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
import PlanCard from "../../components/onboarding/PlanCard";
import OTPinput from "../../components/OTPinput";
import { images } from "../../constants";

export default function Plans() {
  const [loading, setLoading] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  if (!loading && isLoggedin) {
    return <Redirect href="/home" />;
  }
  return (
    <SafeAreaView className=" bg-softWhite h-full  w-full">
      <View
        className="my-[10%] flex justify-around"
        contentContainerStyle={{ height: "100%", width: "100%" }}
      >
        <View className=" ">
          <View className=" w-[100%] h-[47px]">
            <Image
              source={images.fullSizeLogo}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
          <Text className="text-center font-pmedium text-[18px] mt-4 px-[5%] mx-auto">
            Unlock Your Peace of Mind - It's Easier Than You Think!
          </Text>
        </View>
        <View className="flex h-[70%] ">
          <PlanCard />
        </View>
        <View className="mt-5  ">
          <CustomBlackButton
            handlePress={() => {
              router.push("onboarding/Registration");
            }}
            title="Continue"
          />
        </View>
      </View>
      <StatusBar backgroundColor="#f8f8f8" style="dark" />
    </SafeAreaView>
  );
}
