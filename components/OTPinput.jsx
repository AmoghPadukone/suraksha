import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";

const OTPinput = () => {
  return (
    <View>
      <OTPTextView
        textInputStyle={styles.roundedTextInput}
        containerStyle={styles.textInputContainer}
        tintColor="#FDA51D"
      />
    </View>
  );
};

export default OTPinput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 0,
    paddingVertical: 22,
  },

  textInputContainer: {
    marginBottom: 10,
  },
  roundedTextInput: {
    borderRadius: 12,
    padding: 0,
    height: 70,
    width: 70,
    borderWidth: 4,
  },
});
