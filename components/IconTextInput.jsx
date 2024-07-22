// CustomTextInput.js
import Ionicons from "@expo/vector-icons/Ionicons";
import { styled } from "nativewind";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

const CustomTextInput = ({
  icon = "alert-circle-outline",
  inputMode = "default",
  keyboardType = "default",
  placeholder = "",
  iconColor = "#00000040",
  enterKeyHint = "next",
  iconSize = 30,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const slicedPlaceholder =
    placeholder.length > 32 ? `${placeholder.slice(0, 32)}...` : placeholder;

  return (
    <View
      className={`flex-row w-full border-[1.5px] rounded-[12px]  p-3 h-[60px] mb-5 bg-[#ffffffb3] `}
    >
      <Ionicons
        className="m-auto"
        name={icon}
        size={iconSize}
        color={isFocused ? "#FFA84D" : iconColor}
      />
      <TextInput
        className="flex-1 pl-3 font-pmedium text-[16px]   text-black h-full  "
        keyboardType={keyboardType}
        placeholder={slicedPlaceholder}
        onFocus={handleFocus}
        inputMode={inputMode}
        onBlur={handleBlur}
        clearButtonMode="while-editing"
        enterKeyHint={enterKeyHint}
      />
    </View>
  );
};

export default CustomTextInput;
