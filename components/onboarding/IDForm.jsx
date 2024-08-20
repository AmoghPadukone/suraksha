import { Formik } from "formik";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Divider, HelperText } from "react-native-paper";
import * as Yup from "yup";
import { images } from "../../constants";
import MTextInput from "../MTextInput";

const validationSchema = Yup.object().shape({
  adhaar: Yup.string().required("Aadhar number is required"),
  pan: Yup.string().required("PAN number is required"),
});

const IDForm = ({ initialValues, onValuesChange }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
        onValuesChange(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Aadhar Verification</Text>
            <Text style={styles.subHeader}>Let's get to know you better</Text>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.imageContainer}>
            <Image
              source={images.adhaarGraphic}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <ScrollView style={styles.scrollView}>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <MTextInput
                  label="Aadhar Number"
                  iconName="card-account-details-outline"
                  placeholder="Enter your Aadhar Number"
                  onChangeText={(text) => {
                    handleChange("adhaar")(text);
                    onValuesChange({ ...values, adhaar: text });
                  }}
                  onBlur={handleBlur("adhaar")}
                  value={values.adhaar}
                  style={styles.input}
                />
                <HelperText
                  type="error"
                  visible={touched.adhaar && errors.adhaar}
                >
                  {errors.adhaar}
                </HelperText>

                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={handleSubmit}
                >
                  Get OTP
                </Button>
              </View>

              <MTextInput
                label="PAN Number"
                iconName="credit-card-outline"
                placeholder="Enter your PAN Number"
                onChangeText={(text) => {
                  handleChange("pan")(text);
                  onValuesChange({ ...values, pan: text });
                }}
                onBlur={handleBlur("pan")}
                value={values.pan}
                style={styles.input}
              />
              <HelperText type="error" visible={touched.pan && errors.pan}>
                {errors.pan}
              </HelperText>

              <HelperText type="error" visible={touched.phone && errors.phone}>
                {errors.phone}
              </HelperText>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  headerContainer: {
    paddingTop: "5%",
    paddingHorizontal: "5%",
    marginBottom: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subHeader: {
    fontSize: 14,
    color: "#666",
  },
  divider: {
    marginVertical: 16,
    backgroundColor: "#e0e0e0",
  },
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    height: 175,
    width: "100%",
  },
  scrollView: {
    flex: 1,
  },
  formContainer: {
    gap: 10,
    paddingTop: "5%",
    paddingHorizontal: "5%",
  },
  inputContainer: {
    marginBottom: 8,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 18,
    height: 50,
    marginLeft: "auto",
    width: "50%",
    paddingTop: 5,
    borderRadius: 8,
  },
});

export default IDForm;
