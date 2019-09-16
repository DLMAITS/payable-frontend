import React from "react";
import { StyledOnboardingProgressItemElement } from "./OnboardingProgressItem.styled";

const OnboardingProgressItem = props => {
  const { itemNumber, itemText, isSelected } = props;
  return (
    <div>
      <StyledOnboardingProgressItemElement isSelected={isSelected}>
        {itemNumber}
      </StyledOnboardingProgressItemElement>
      <StyledOnboardingProgressItemElement isSelected={isSelected}>
        {itemText}
      </StyledOnboardingProgressItemElement>
    </div>
  );
};

export default OnboardingProgressItem;
