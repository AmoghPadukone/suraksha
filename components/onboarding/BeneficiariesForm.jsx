import { FieldArray, Formik } from "formik";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, Divider } from "react-native-paper";
import MTextInput from "../MTextInput";

const BeneficiariesForm = ({ onValuesChange }) => {
  const initialValues = {
    beneficiaries: [
      {
        name: "",
        email: "",
      },
    ],
  };

  const handleTextChange = (name, value, setFieldValue) => {
    setFieldValue(name, value);
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

      <ScrollView className="max-h-[85%] mt-2">
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}} // We don't need this anymore
        >
          {({ values, setFieldValue }) => {
            // Call onValuesChange whenever values change
            React.useEffect(() => {
              onValuesChange(values.beneficiaries);
            }, [values.beneficiaries]);

            return (
              <View>
                <FieldArray name="beneficiaries">
                  {({ remove, push }) => (
                    <View>
                      {values.beneficiaries.map((beneficiary, index) => (
                        <View key={index}>
                          <MTextInput
                            label={`Beneficiary Name ${index + 1}`}
                            iconName="smart-card"
                            placeholder="Enter Beneficiary's Name"
                            onChangeText={(value) =>
                              handleTextChange(
                                `beneficiaries[${index}].name`,
                                value,
                                setFieldValue
                              )
                            }
                            value={beneficiary.name}
                          />
                          <MTextInput
                            label={`Beneficiary Email ${index + 1}`}
                            iconName="email"
                            placeholder="Enter Beneficiary's Email"
                            onChangeText={(value) =>
                              handleTextChange(
                                `beneficiaries[${index}].email`,
                                value,
                                setFieldValue
                              )
                            }
                            value={beneficiary.email}
                          />
                          <Button mode="outlined" onPress={() => remove(index)}>
                            Remove
                          </Button>
                        </View>
                      ))}
                      <Button
                        mode="contained"
                        onPress={() => push({ name: "", email: "" })}
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
