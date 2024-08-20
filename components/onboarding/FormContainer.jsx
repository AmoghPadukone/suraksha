import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FormContainer = ({ children }) => {
  return (
    <View
      className="h-full m-5  rounded-[16px] bg-white "
      style={styles.shadow}
    >
      {children}
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  shadow: {
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,

    borderColor: " ", // if you need
    borderWidth: 0.5,
  },
});
