import { router } from "expo-router";
import { Text, View } from "react-native";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicForm from "../../components/onboarding/BasicForm";
import BeneficiariesForm from "../../components/onboarding/BeneficiariesForm";
import FormContainer from "../../components/onboarding/FormContainer";
import IDForm from "../../components/onboarding/IDForm";
import RegistrationFinishScreen from "../../components/onboarding/RegistrationFinishScreen";
import ResidenceForm from "../../components/onboarding/ResidenceForm";

const Registration = () => {
  const navigationOptions = {
    header: null,
  };
  onNextStep = () => {
    console.log("called next step");
  };

  onPrevStep = () => {
    console.log("called previous step");
  };

  onSubmitSteps = () => {
    console.log("called on submit step.");
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
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            scrollable={false}
            label="Basic"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <BasicForm />
            </FormContainer>
          </ProgressStep>
          <ProgressStep
            label="ID"
            scrollable={false}
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <IDForm />
            </FormContainer>
          </ProgressStep>
          <ProgressStep
            label="Residence"
            scrollable={false}
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <ResidenceForm />
            </FormContainer>
          </ProgressStep>
          <ProgressStep
            label="Beneficiary"
            scrollable={false}
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            viewProps={defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <FormContainer>
              <BeneficiariesForm />
            </FormContainer>
          </ProgressStep>
          <ProgressStep
            label="finish"
            scrollable={false}
            finishBtnText="Complete"
            onPrevious={this.onPrevStep}
            onSubmit={() => {
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
