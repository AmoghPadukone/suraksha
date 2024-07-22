import React from "react";
import { Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox = ({
  size = 20,
  fillColor = "#FDA51D",
  unFillColor = "#fff",
  text = "placeholder Text",
  fontFamily = "Poppins-Regular",
  onPress = (isChecked) => {
    console.log(isChecked);
  },
  disableText = true,
}) => {
  return (
    <View className=" flex-row gap-2 items-center">
      <BouncyCheckbox
        size={size}
        disableText={disableText}
        fillColor={fillColor}
        unFillColor={unFillColor}
        text={text}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: `${fontFamily}` }}
        onPress={onPress}
      />
      <Text className={`font-plight text-[16px]`}>{text}</Text>
    </View>
  );
};

export default Checkbox;
