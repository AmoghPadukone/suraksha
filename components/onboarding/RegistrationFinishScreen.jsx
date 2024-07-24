import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native"; // Import ScrollView
import { Button, Divider } from "react-native-paper";
import MTextInput from "../MTextInput";
import CustomBlackButton from "../customBlackButton";

const RegistrationFinishScreen = () => {
  const handleTextChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <View>
      <View className="h-[70%]">
        <LottieView
          autoPlay
          loop
          style={{ height: "100%" }}
          source={require("../../assets/lottie/loadingRegister.json")}
        />
      </View>
      <View className="px-2">
        <Text className="text-[26px] font-pbold text-center">
          We are getting things set-up for you :)
        </Text>
        <Text className="text-[14px] font-pmedium pt-3 text-center">
          we securely store your data on our encrypted databses{" "}
        </Text>
      </View>
      {/* <View className="flex">
        <Text className="text-[28px] font-pbold">Beneficiaries</Text>
        <Text className="text-[14px] font-pmedium pl-3">
          Tell us who your loved ones are
        </Text>
      </View> */}
      {/* <Divider bold className="my-3" /> */}

      {/* Wrap the inputs with ScrollView */}
      {/* <ScrollView className="max-h-[100%] mt-2">
        <View style={{ gap: 20 }} className="flex">
          <View>
            <Button
              className=" ml-auto mt-3 bg-black text-white font-pmedium w-[120px]"
              mode="elevated"
            >
              Get OTP
            </Button>
          </View>
        </View>
      </ScrollView> */}
    </View>
  );
};

export default RegistrationFinishScreen;
