import React from "react";
import OnboardingTitleText from "../../../../layout/text/OnboardingTitleText/OnboardingTitleText";
import OnboardingInfoCard from "../../../../layout/cards/OnboardingInfoCard/OnboardingInfoCard";
import { styledConfig } from "./InfoContainer.styled";

const itemsArray = [
  {
    headingText: "Company addresses",
    bodyText:
      "We need to check that our customers are registered in the UK. Therefore we ask for both your trading and registered addresses"
  },
  {
    headingText: "VAT registration",
    bodyText:
      "We collect VAT registration information to help determine the optimal and best funding options we can provide to you using our revolving credit facility"
  },
  {
    headingText: "Company website",
    bodyText:
      "Your company website helps to provide more information about your business and therefore helps us to determine the best funding option for you"
  },
  {
    headingText: "Funding limit",
    bodyText:
      "Tell us what you need! And we'll do our best to match, and in the vast majority of cases, exceed what you're looking for"
  }
];

const InfoContainer = () => {
  return (
    <div>
      <OnboardingTitleText>Why we collect the data</OnboardingTitleText>
      <div style={styledConfig.divSpace}></div>
      {itemsArray.map(item => (
        <OnboardingInfoCard
          style={styledConfig.onboardingCard}
          headingText={item.headingText}
          bodyText={item.bodyText}
        />
      ))}
    </div>
  );
};

export default InfoContainer;
