import { FieldArray, Formik } from "formik";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, Divider, IconButton } from "react-native-paper";
import MTextInput from "../MTextInput";

const BeneficiariesForm = ({ onValuesChange }) => {
  const initialValues = {
    beneficiaries: [
      {
        name: "",
        email: "",
        percentage: "",
        relationship: "",
        adhaarNumber: "",
      },
    ],
  };

  const handleTextChange = (name, value, setFieldValue) => {
    setFieldValue(name, value);
  };

  return (
    <View style={{ padding: 0, backgroundColor: "#fff" }}>
      <View
        style={{ marginBottom: 16, paddingTop: "5%", paddingHorizontal: "5%" }}
      >
        <Text style={{ fontSize: 28, fontWeight: "700", color: "#333" }}>
          Beneficiaries
        </Text>
        <Text style={{ fontSize: 14, color: "#666", paddingLeft: 8 }}>
          Tell us who your loved ones are
        </Text>
      </View>
      <Divider style={{ marginBottom: 16, backgroundColor: "#ccc" }} />

      <ScrollView style={{ maxHeight: "85%" }}>
        <Formik initialValues={initialValues}>
          {({ values, setFieldValue }) => {
            React.useEffect(() => {
              onValuesChange(values.beneficiaries);
            }, [values.beneficiaries]);

            return (
              <View style={{ paddingTop: "5%", paddingHorizontal: "5%" }}>
                <FieldArray name="beneficiaries">
                  {({ remove, push }) => (
                    <View>
                      {values.beneficiaries.map((beneficiary, index) => (
                        <View
                          key={index}
                          style={{
                            marginBottom: 20,
                            padding: 16,
                            borderWidth: 1,
                            borderColor: "#eee",
                            borderRadius: 8,
                            backgroundColor: "#f7f7f7",
                          }}
                        >
                          <MTextInput
                            label={`Beneficiary Name ${index + 1}`}
                            iconName="account-circle-outline"
                            placeholder="Enter Beneficiary's Name"
                            onChangeText={(value) =>
                              handleTextChange(
                                `beneficiaries[${index}].name`,
                                value,
                                setFieldValue
                              )
                            }
                            value={beneficiary.name}
                            style={{ marginBottom: 12 }}
                          />
                          <MTextInput
                            label={`Beneficiary Email ${index + 1}`}
                            iconName="email-outline"
                            placeholder="Enter Beneficiary's Email"
                            onChangeText={(value) =>
                              handleTextChange(
                                `beneficiaries[${index}].email`,
                                value,
                                setFieldValue
                              )
                            }
                            value={beneficiary.email}
                            style={{ marginBottom: 12 }}
                          />
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 12,
                            }}
                          >
                            <View style={{ flex: 5, marginRight: "2.5%" }}>
                              <MTextInput
                                label={`Relationship ${index + 1}`}
                                iconName="account-heart-outline"
                                placeholder="Enter Relationship"
                                onChangeText={(value) =>
                                  handleTextChange(
                                    `beneficiaries[${index}].relationship`,
                                    value,
                                    setFieldValue
                                  )
                                }
                                value={beneficiary.relationship}
                              />
                            </View>
                            <View style={{ flex: 3 }}>
                              <MTextInput
                                label={`Share `}
                                iconName="percent-outline"
                                placeholder="Share"
                                onChangeText={(value) =>
                                  handleTextChange(
                                    `beneficiaries[${index}].percentage`,
                                    value,
                                    setFieldValue
                                  )
                                }
                                value={beneficiary.percentage}
                              />
                            </View>
                          </View>
                          <MTextInput
                            label={`Aadhaar Number ${index + 1}`}
                            iconName="card-account-details-outline"
                            placeholder="Enter Aadhaar Number"
                            onChangeText={(value) =>
                              handleTextChange(
                                `beneficiaries[${index}].adhaarNumber`,
                                value,
                                setFieldValue
                              )
                            }
                            value={beneficiary.adhaarNumber}
                            style={{ marginBottom: 12 }}
                          />
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "flex-end",
                            }}
                          >
                            <IconButton
                              icon="delete-outline"
                              color="#ff5252"
                              onPress={() => remove(index)}
                            />
                          </View>
                        </View>
                      ))}
                      <Button
                        icon="plus"
                        mode="contained"
                        onPress={() =>
                          push({
                            name: "",
                            email: "",
                            percentage: "",
                            relationship: "",
                            adhaarNumber: "",
                          })
                        }
                        style={{
                          marginTop: 16,
                          backgroundColor: "#FDA51D",
                          paddingVertical: 10,
                          borderRadius: 8,
                        }}
                        labelStyle={{ color: "#fff", fontWeight: "600" }}
                      >
                        Add Beneficiary
                      </Button>
                    </View>
                  )}
                </FieldArray>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default BeneficiariesForm;
