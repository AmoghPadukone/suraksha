import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Checkbox, Divider, TextInput } from "react-native-paper";
import * as Yup from "yup";
import MTextInput from "../MTextInput";
import CustomBlackButton from "../customBlackButton";

// Validation Schema
const validationSchema = Yup.object().shape({
  addressLine1: Yup.string().required("Address Line 1 is required"),
  addressLine2: Yup.string(),
  landmark: Yup.string(),
  city: Yup.string().required("City is required"),
  pinCode: Yup.string().required("PIN Code is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
});

const ResidenceForm = () => {
  const [permanentAddressSame, setPermanentAddressSame] = useState(false);

  return (
    <Formik
      initialValues={{
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        city: "",
        pinCode: "",
        state: "",
        country: "",
        permAddressLine1: "",
        permAddressLine2: "",
        permLandmark: "",
        permCity: "",
        permPinCode: "",
        permState: "",
        permCountry: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Handle form submission
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => {
        // Automatically update permanent address fields when the checkbox is checked
        useEffect(() => {
          if (permanentAddressSame) {
            setFieldValue("permAddressLine1", values.addressLine1);
            setFieldValue("permAddressLine2", values.addressLine2);
            setFieldValue("permLandmark", values.landmark);
            setFieldValue("permCity", values.city);
            setFieldValue("permPinCode", values.pinCode);
            setFieldValue("permState", values.state);
            setFieldValue("permCountry", values.country);
          }
        }, [
          permanentAddressSame,
          values.addressLine1,
          values.addressLine2,
          values.landmark,
          values.city,
          values.pinCode,
          values.state,
          values.country,
        ]);

        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Residence</Text>
              <Text style={styles.subtitle}>Tell us where we can find you</Text>
            </View>
            <Divider bold style={styles.divider} />

            <ScrollView style={styles.scrollView}>
              <View style={styles.form}>
                <MTextInput
                  label="Address Line 1"
                  iconName="credit-card-outline"
                  placeholder="Apt, Floor, Building"
                  onChangeText={handleChange("addressLine1")}
                  onBlur={handleBlur("addressLine1")}
                  value={values.addressLine1}
                  error={touched.addressLine1 && errors.addressLine1}
                />
                <MTextInput
                  label="Address Line 2"
                  iconName="credit-card-outline"
                  placeholder="Street, Colony, Area"
                  onChangeText={handleChange("addressLine2")}
                  onBlur={handleBlur("addressLine2")}
                  value={values.addressLine2}
                />
                <MTextInput
                  label="Landmark"
                  iconName="credit-card-outline"
                  placeholder="Near something"
                  onChangeText={handleChange("landmark")}
                  onBlur={handleBlur("landmark")}
                  value={values.landmark}
                />
                <MTextInput
                  label="City"
                  iconName="credit-card-outline"
                  placeholder="City"
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  value={values.city}
                  error={touched.city && errors.city}
                />
                <MTextInput
                  label="PIN Code"
                  iconName="credit-card-outline"
                  placeholder="Enter your PIN Code"
                  onChangeText={handleChange("pinCode")}
                  onBlur={handleBlur("pinCode")}
                  value={values.pinCode}
                  error={touched.pinCode && errors.pinCode}
                />
                <MTextInput
                  label="State"
                  iconName="credit-card-outline"
                  placeholder="Enter your State"
                  onChangeText={handleChange("state")}
                  onBlur={handleBlur("state")}
                  value={values.state}
                  error={touched.state && errors.state}
                />
                <MTextInput
                  label="Country"
                  iconName="credit-card-outline"
                  placeholder="Enter your Country"
                  onChangeText={handleChange("country")}
                  onBlur={handleBlur("country")}
                  value={values.country}
                  error={touched.country && errors.country}
                />

                <View style={styles.checkboxContainer}>
                  <Checkbox
                    status={permanentAddressSame ? "checked" : "unchecked"}
                    onPress={() =>
                      setPermanentAddressSame(!permanentAddressSame)
                    }
                  />
                  <Text style={styles.checkboxLabel}>
                    Permanent address is the same
                  </Text>
                </View>

                {!permanentAddressSame && (
                  <View>
                    <MTextInput
                      label="Permanent Address Line 1"
                      iconName="credit-card-outline"
                      placeholder="Apt, Floor, Building"
                      onChangeText={handleChange("permAddressLine1")}
                      onBlur={handleBlur("permAddressLine1")}
                      value={values.permAddressLine1}
                    />
                    <MTextInput
                      label="Permanent Address Line 2"
                      iconName="credit-card-outline"
                      placeholder="Street, Colony, Area"
                      onChangeText={handleChange("permAddressLine2")}
                      onBlur={handleBlur("permAddressLine2")}
                      value={values.permAddressLine2}
                    />
                    <MTextInput
                      label="Permanent Landmark"
                      iconName="credit-card-outline"
                      placeholder="Near something"
                      onChangeText={handleChange("permLandmark")}
                      onBlur={handleBlur("permLandmark")}
                      value={values.permLandmark}
                    />
                    <MTextInput
                      label="Permanent City"
                      iconName="credit-card-outline"
                      placeholder="City"
                      onChangeText={handleChange("permCity")}
                      onBlur={handleBlur("permCity")}
                      value={values.permCity}
                    />
                    <MTextInput
                      label="Permanent PIN Code"
                      iconName="credit-card-outline"
                      placeholder="Enter your PIN Code"
                      onChangeText={handleChange("permPinCode")}
                      onBlur={handleBlur("permPinCode")}
                      value={values.permPinCode}
                    />
                    <MTextInput
                      label="Permanent State"
                      iconName="credit-card-outline"
                      placeholder="Enter your State"
                      onChangeText={handleChange("permState")}
                      onBlur={handleBlur("permState")}
                      value={values.permState}
                    />
                    <MTextInput
                      label="Permanent Country"
                      iconName="credit-card-outline"
                      placeholder="Enter your Country"
                      onChangeText={handleChange("permCountry")}
                      onBlur={handleBlur("permCountry")}
                      value={values.permCountry}
                    />
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
    paddingTop: "5%",
    paddingHorizontal: "5%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
  divider: {
    marginVertical: 8,
  },
  scrollView: {
    flex: 1,
  },
  form: {
    gap: 20,
    padding: "5%",
    paddingTop: 0,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default ResidenceForm;
