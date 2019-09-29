import React from "react";
import OnboardingTitleText from "../../../../layout/text/OnboardingTitleText/OnboardingTitleText";
import OnboardingInfoCard from "../../../../layout/cards/OnboardingInfoCard/OnboardingInfoCard";
import { styledConfig } from "./InfoContainer.styled";

const itemsArray = [
  {
    headingText: "Bank account",
    bodyText:
      "We collect information regarding types of transactions and historical & current cash balances to best decide on an appropriate funding level"
  },
  {
    headingText: "Accounting information",
    bodyText:
      "We collect information regarding revenues, costs, and cash positions to be best decide on an appropriate funding level"
  }
];

const InfoContainer = () => {
  return (
    <div>
      <OnboardingTitleText>Why we collect the data</OnboardingTitleText>
      <div style={styledConfig.divSpace}></div>
      {itemsArray.map(item => (
        <OnboardingInfoCard
          key={item.headingText}
          style={styledConfig.onboardingCard}
          headingText={item.headingText}
          bodyText={item.bodyText}
        />
      ))}
    </div>
  );
};

export default InfoContainer;
