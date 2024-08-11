import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomBlackButton = ({
  title,
  type,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-[#000] w-[80%] mx-auto rounded-[12px] min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text
        className={`text-white font-semibold text-lg font-psemibold  ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBlackButton;
