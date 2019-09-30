import React from "react";
import OnboardingTitleText from "../../../../layout/text/OnboardingTitleText/OnboardingTitleText";
import OnboardingSubTitleText from "../../../../layout/text/OnboardingSubTitleText/OnboardingSubTitleText";
import OnboardingBox from "../../../../layout/boxes/OnboardingBox/OnboardingBox";
import { styledConfig } from "./AccountSetupContainer.styled";
import DarkBlueCheckBox from "../../../../layout/checkboxes/DarkBlueCheckBox/DarkBlueCheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import StyledButton from "../../../../layout/buttons/StyledButton/StyledButton";

const AccountSetupContainer = () => {
  return (
    <OnboardingBox {...styledConfig.boxContainer}>
      <div>
        <OnboardingTitleText>Finalising your account</OnboardingTitleText>
        <OnboardingSubTitleText>
          Last few steps to finish setting up your account
        </OnboardingSubTitleText>
      </div>
      <div style={styledConfig.topGap}></div>
      <div style={styledConfig.checkBoxContainer}>
        <FormControlLabel
          control={<DarkBlueCheckBox />}
          label="You agree to us processing your financial data"
        />
        <div style={styledConfig.midGap}></div>
        <FormControlLabel
          control={<DarkBlueCheckBox />}
          label="Hereby, a director of your company consents to all data processing and that all information provided is correct and sufficient"
        />
        <div style={styledConfig.midGap}></div>
        <FormControlLabel
          control={<DarkBlueCheckBox />}
          label="You agree to our Terms and Conditions"
        />
      </div>
      <StyledButton
        variant="contained"
        color="primary"
        width="60%"
        mt="200px"
        type="submit"
      >
        Finish
      </StyledButton>
    </OnboardingBox>
  );
};

export default AccountSetupContainer;
