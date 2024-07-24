import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native"; // Import ScrollView
import { Button, Divider } from "react-native-paper";
import { images } from "../../constants";
import MTextInput from "../MTextInput";
import CustomBlackButton from "../customBlackButton";

const ResidenceForm = () => {
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
        <Text className="text-[28px] font-pbold">Residence</Text>
        <Text className="text-[14px] font-pmedium pl-3">
          Tell us where can we find you
        </Text>
      </View>
      <Divider bold className="my-3" />

      <View></View>
      {/* Wrap the inputs with ScrollView */}
      <ScrollView className="max-h-[85%] mt-2">
        <View style={{ gap: 20 }} className="flex">
          <MTextInput
            label="Address Line 1"
            iconName="credit-card"
            placeholder="Apt, Floor, Building"
            onChangeText={(value) => handleTextChange("email", value)}
            value={formData.email}
          />
          <MTextInput
            label="Address Line 2"
            iconName="credit-card"
            placeholder=" Street, Colony, Area"
            onChangeText={(value) => handleTextChange("email", value)}
            value={formData.email}
          />
          <MTextInput
            label="Landmark"
            iconName="credit-card"
            placeholder=" near something"
            onChangeText={(value) => handleTextChange("email", value)}
            value={formData.email}
          />

          <MTextInput
            label=" City"
            iconName="credit-card"
            placeholder=" Street, Colony, Area"
            onChangeText={(value) => handleTextChange("email", value)}
            value={formData.email}
          />
          <MTextInput
            label=" PIN Code"
            iconName="credit-card"
            placeholder="Enter your PIN Code"
            onChangeText={(value) => handleTextChange("email", value)}
            value={formData.email}
          />
          <MTextInput
            label=" State"
            iconName="credit-card"
            placeholder="Enter your PAN Number"
            onChangeText={(value) => handleTextChange("email", value)}
            value={formData.email}
          />
          <MTextInput
            label=" Country"
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

export default ResidenceForm;
