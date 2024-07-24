import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native"; // Import ScrollView
import { Divider } from "react-native-paper";
import MTextInput from "../MTextInput";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
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
        <Text className="text-[28px] font-pbold">Basic Details</Text>
        <Text className="text-[14px] font-pmedium pl-3">
          Let's get to know you
        </Text>
      </View>
      <Divider bold className="my-3" />

      {/* Wrap the inputs with ScrollView */}
      <ScrollView className="max-h-[100%]">
        <View style={{ gap: 20 }} className="flex">
          <MTextInput
            label="Name"
            iconName="account"
            placeholder="Enter your name"
            onChangeText={(value) => handleTextChange("name", value)}
            value={formData.name}
          />
          <MTextInput
            label="Email"
            iconName="email"
            placeholder="Enter your email"
            onChangeText={(value) => handleTextChange("email", value)}
            value={formData.email}
          />
          <MTextInput
            label="DOB"
            iconName="cake"
            placeholder="Enter your phone number"
            onChangeText={(value) => handleTextChange("phone", value)}
            value={formData.phone}
          />
          <MTextInput
            label="Phone"
            iconName="phone"
            placeholder="Enter your phone number"
            onChangeText={(value) => handleTextChange("phone", value)}
            value={formData.phone}
          />
          <MTextInput
            label="Password"
            secureTextEntry
            iconName="lock" // Changed to a more appropriate icon
            placeholder="Enter your password" // Updated placeholder text
            onChangeText={(value) => handleTextChange("password", value)} // Corrected to match the password field
            value={formData.password} // Corrected to match the password field
          />
          <MTextInput
            label="Confirm Password"
            iconName="lock" // Changed to a more appropriate icon
            secureTextEntry
            placeholder="Confirm your password" // Updated placeholder text
            onChangeText={(value) => handleTextChange("confirmPassword", value)} // Should have a separate state field
            value={formData.confirmPassword} // Should have a separate state field
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BasicForm;
