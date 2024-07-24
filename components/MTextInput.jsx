import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

const MTextInput = ({
  onChangeText,
  value,
  label,
  iconName,
  placeholder,
  multiline = false,
  numberOfLines = 1,
  secureTextEntry = false, // New prop for password input
  iconNameRight, // New prop for right icon
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(!secureTextEntry); // State to toggle password visibility

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ height: "60px" }}>
      <TextInput
        outlineStyle={{
          borderRadius: 8,
          borderWidth: 1.25,
          backgroundColor: "white",
        }}
        outlineColor={"rgba(0,0,0,0.6)"}
        activeOutlineColor={"rgba(0,0,0,1)"}
        left={
          <TextInput.Icon
            icon={iconName}
            color={isFocused ? "orange" : undefined}
          />
        }
        right={
          secureTextEntry && ( // Conditionally render the right icon for password visibility
            <TextInput.Icon
              icon={!showPassword ? "eye-off" : "eye"} // Toggle icon based on visibility
              onPress={toggleShowPassword} // Toggle visibility on press
            />
          )
        }
        onChangeText={onChangeText}
        value={value}
        label={label}
        mode="outlined"
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={!showPassword} // Use the showPassword state to toggle text visibility
        style={styles.textInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    fontFamily: "Montserrat-Regular",
  },
});

export default MTextInput;
