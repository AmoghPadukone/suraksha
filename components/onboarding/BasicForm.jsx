import { Formik } from "formik";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Divider, HelperText } from "react-native-paper";
import * as Yup from "yup";
import MDropdown from "../MDropdown"; // Assuming you have a custom dropdown component
import MTextInput from "../MTextInput";

const securityQuestions = [
  { label: "What's your mother's maiden name?", value: "mother_maiden_name" },
  { label: "What's the name of your first pet?", value: "first_pet" },
  { label: "In which city were you born?", value: "birth_city" },
  // Add more security questions as needed
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  securityQuestion: Yup.string().required("Security question is required"),
  securityAnswer: Yup.string().required("Security answer is required"),
});

const BasicForm = ({ initialValues, onValuesChange }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        securityQuestion: "",
        securityAnswer: "",
        ...initialValues,
      }}
      validationSchema={validationSchema}
      onSubmit={onValuesChange}
      enableReinitialize
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <View style={{ height: "100%" }}>
          <View
            style={{
              marginBottom: 16,
              paddingTop: "5%",
              paddingHorizontal: "5%",
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>
              Basic Details
            </Text>
            <Text style={{ fontSize: 14, marginTop: 4, color: "#6b6b6b" }}>
              Let's get to know you
            </Text>
          </View>
          <Divider style={{ marginBottom: 16 }} />
          <ScrollView>
            <View style={{ gap: 4, padding: "5%" }}>
              <MTextInput
                label="Name"
                iconName="account-outline"
                placeholder="Enter your name"
                onChangeText={(text) => {
                  handleChange("name")(text);
                  handleSubmit();
                }}
                onBlur={handleBlur("name")}
                value={values.name}
                error={touched.name && errors.name}
              />
              <HelperText type="error" visible={touched.name && errors.name}>
                {errors.name}
              </HelperText>

              <MTextInput
                label="Email"
                iconName="email-outline"
                placeholder="Enter your email"
                onChangeText={(text) => {
                  handleChange("email")(text);
                  handleSubmit();
                }}
                onBlur={handleBlur("email")}
                value={values.email}
                error={touched.email && errors.email}
              />
              <HelperText type="error" visible={touched.email && errors.email}>
                {errors.email}
              </HelperText>

              <MTextInput
                label="Phone"
                iconName="phone-outline"
                placeholder="Enter your phone number"
                onChangeText={(text) => {
                  handleChange("phone")(text);
                  handleSubmit();
                }}
                onBlur={handleBlur("phone")}
                value={values.phone}
                error={touched.phone && errors.phone}
              />
              <HelperText type="error" visible={touched.phone && errors.phone}>
                {errors.phone}
              </HelperText>

              <MTextInput
                label="Password"
                iconName="lock-outline"
                placeholder="Enter your password"
                onChangeText={(text) => {
                  handleChange("password")(text);
                  handleSubmit();
                }}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
                error={touched.password && errors.password}
              />
              <HelperText
                type="error"
                visible={touched.password && errors.password}
              >
                {errors.password}
              </HelperText>

              <MTextInput
                label="Confirm Password"
                iconName="lock-check-outline"
                placeholder="Confirm your password"
                onChangeText={(text) => {
                  handleChange("confirmPassword")(text);
                  handleSubmit();
                }}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <HelperText
                type="error"
                visible={touched.confirmPassword && errors.confirmPassword}
              >
                {errors.confirmPassword}
              </HelperText>

              <MDropdown
                label="Security Question"
                iconName="shield-account-outline"
                items={securityQuestions}
                onValueChange={(value) => {
                  setFieldValue("securityQuestion", value);
                  handleSubmit();
                }}
                value={values.securityQuestion}
                error={touched.securityQuestion && errors.securityQuestion}
              />
              <HelperText
                type="error"
                visible={touched.securityQuestion && errors.securityQuestion}
              >
                {errors.securityQuestion}
              </HelperText>

              <MTextInput
                label="Security Answer"
                iconName="shield-check-outline"
                placeholder="Enter your security answer"
                onChangeText={(text) => {
                  handleChange("securityAnswer")(text);
                  handleSubmit();
                }}
                onBlur={handleBlur("securityAnswer")}
                value={values.securityAnswer}
                error={touched.securityAnswer && errors.securityAnswer}
              />
              <HelperText
                type="error"
                visible={touched.securityAnswer && errors.securityAnswer}
              >
                {errors.securityAnswer}
              </HelperText>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default BasicForm;
