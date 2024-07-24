import { Field, Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native"; // Import ScrollView
import { Button, Divider } from "react-native-paper";
import { images } from "../../constants";
import MTextInput from "../MTextInput";
import CustomBlackButton from "../customBlackButton";

const BeneficiariesForm = () => {
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
        <Text className="text-[28px] font-pbold">Beneficiaries</Text>
        <Text className="text-[14px] font-pmedium pl-3">
          Tell us who your loved ones are
        </Text>
      </View>
      <Divider bold className="my-3" />

      {/* Wrap the inputs with ScrollView */}
      <ScrollView className="max-h-[100%] mt-2">
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <MTextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                label="Adhaar Number"
                iconName="smart-card"
                placeholder="Enter your Adhaar Number"
              />
            </View>
          )}
        </Formik>
        {/* <View style={{ gap: 20 }} className="flex">
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
        </View> */}
      </ScrollView>
    </View>
  );
};

export default BeneficiariesForm;
