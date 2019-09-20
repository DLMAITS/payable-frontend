import React from "react";
import OnboardingBox from "../../../../layout/boxes/OnboardingBox/OnboardingBox";
import OnboardingTitleText from "../../../../layout/text/OnboardingTitleText/OnboardingTitleText";
import OnboardingSubTitleText from "../../../../layout/text/OnboardingSubTitleText/OnboardingSubTitleText";
import { styledConfig } from "./CompanyFinancialsContainer.styled";

const CompanyFinancials = () => {
  return (
    <OnboardingBox {...styledConfig.boxContainer}>
      <OnboardingTitleText>Financials</OnboardingTitleText>
      <OnboardingSubTitleText>Connect your bank account</OnboardingSubTitleText>
    </OnboardingBox>
  );
};

export default CompanyFinancials;
