import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicForm from "../../components/onboarding/BasicForm";
import BeneficiariesForm from "../../components/onboarding/BeneficiariesForm";
import FormContainer from "../../components/onboarding/FormContainer";
import IDForm from "../../components/onboarding/IDForm";
import RegistrationFinishScreen from "../../components/onboarding/RegistrationFinishScreen";
import ResidenceForm from "../../components/onboarding/ResidenceForm";
import useFormStore from "../../store/formStore/store";

const Registration = () => {
  const { formData, setFormData, currentStep, setCurrentStep } = useFormStore();

  const [beneficiariesData, setBeneficiariesData] = useState([]);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };
  const handleBeneficiariesSubmit = (data) => {
    setBeneficiariesData(data);
    console.log(data);
    // You can also call onNextStep here if you want to automatically move to the next step
    onNextStep();
  };
  const navigationOptions = {
    header: null,
  };
  onNextStep = () => {
    console.log("called ne22xt step");
  };
  onBeneficiarySubmit = () => {
    console.log("called eweqwqw step");
    console.log(beneficiariesData);
  };

  onPrevStep = () => {
    console.log("called previous step");
  };

  onSubmitSteps = () => {
    console.log("called on submit step.");
  };

  const handleBeneficiariesChange = (data) => {
    setBeneficiariesData(data);
  };

  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
    marginBottom: 25,
  };

  const progressStepsStyle = {
    labelFontFamily: "Montserrat-Regular",
    borderWidth: 6,
    labelFontSize: 12,
    progressBarColor: "#fff",
    labelColor: "#000",
    //  acitve:
    activeLabelColor: "#000",
    activeStepIconBorderColor: "#FDA51D",
    activeStepIconColor: "#fff",
    activeStepNumColor: "#fff",
    // disabled:

    disabledStepIconColor: "#fff",
    disabledStepNumColor: "#00000f",
    // completed:
    completedStepIconColor: "#FDA51D",
    completedProgressBarColor: "#FDA51D",
    completedCheckColor: "#fff",
    // completedStepNumColor
    completedLabelColor: "#FDA51D",
  };

  const buttonTextStyle = {
    color: "#686868",
    fontWeight: "",
    fontFamily: "Montserrat-ExtraBold",
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: "85%", marginBottom: "50px" }}>
        <ProgressSteps
          {...progressStepsStyle}
          currentStep={useFormStore((state) => state.currentStep)}
          onChange={handleStepChange}
        >
          <ProgressStep
            scrollable={false}
            label="Basic"
            onNext={() => handleStepChange(1)}
            onPrevious={() => handleStepChange(0)}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <BasicForm
                initialValues={formData.basic}
                onValuesChange={(values) => setFormData("basic", values)}
              />
            </FormContainer>
          </ProgressStep>
          <ProgressStep
            label="ID"
            onNext={() => handleStepChange(2)}
            onPrevious={() => handleStepChange(0)}
            scrollable={false}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <IDForm
                initialValues={formData.id}
                onValuesChange={(values) => setFormData("id", values)}
              />
            </FormContainer>
          </ProgressStep>
          <ProgressStep
            label="Residence"
            onNext={() => handleStepChange(3)}
            onPrevious={() => handleStepChange(1)}
            scrollable={false}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <ResidenceForm
                initialValues={formData.residence}
                onValuesChange={(values) => setFormData("residence", values)}
              />
            </FormContainer>
          </ProgressStep>
          <ProgressStep
            scrollable={false}
            label="Beneficiary"
            onNext={() => handleStepChange(4)}
            onPrevious={() => handleStepChange(2)}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <BeneficiariesForm
                initialValues={formData.beneficiaries}
                onValuesChange={(values) =>
                  setFormData("beneficiaries", values)
                }
              />
            </FormContainer>
          </ProgressStep>
          <ProgressStep
            label="finish"
            scrollable={false}
            finishBtnText="Complete"
            onPrevious={this.onPrevStep}
            onSubmit={() => {
              const allFormData = formData;
              console.log("Final Form Data:", allFormData);
              router.push("/home");
            }}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <RegistrationFinishScreen />
            </FormContainer>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </SafeAreaView>
  );
};

export default Registration;
