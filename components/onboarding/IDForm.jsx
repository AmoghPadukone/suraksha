import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native"; // Import ScrollView
import { Button, Divider } from "react-native-paper";
import { images } from "../../constants";
import MTextInput from "../MTextInput";
import CustomBlackButton from "../customBlackButton";

const IDForm = () => {
  const [formData, setFormData] = useState({
    adhaar: "",
    pan: "",
    phone: "",
  });

  const handleTextChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <View>
      <View className="flex">
        <Text className="text-[28px] font-pbold">Aadhar Verification</Text>
        <Text className="text-[14px] font-pmedium pl-3">
          Lets get to know you fr{" "}
        </Text>
      </View>
      <Divider bold className="my-3" />

      <View>
        <Image
          source={images.adhaarGraphic}
          className="h-[175px] w-full"
          resizeMode="contain"
        />
      </View>
      {/* Wrap the inputs with ScrollView */}
      <ScrollView className="max-h-[55%] mt-2">
        <View style={{ gap: 20 }} className="flex">
          <View>
            <MTextInput
              label="Adhaar Number"
              iconName="smart-card"
              placeholder="Enter your Adhaar Number"
              onChangeText={(value) => handleTextChange("adhaar", value)}
              value={formData.name}
            />
            <Button
              className=" ml-auto mt-3 bg-black text-white font-pmedium w-[120px]"
              mode="elevated"
            >
              Get OTP
            </Button>
          </View>
          <MTextInput
            label="PAN Number"
            iconName="credit-card"
            placeholder="Enter your PAN Number"
            onChangeText={(value) => handleTextChange("email", value)}
            value={formData.email}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default IDForm;
