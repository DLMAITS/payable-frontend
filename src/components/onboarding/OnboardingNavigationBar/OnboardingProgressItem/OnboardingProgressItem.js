import React from "react";
import "./OnboardingProgressItem.css";

const OnboardingProgressItem = ({ itemNumber, itemText, isSelected }) => {
  return (
    <div>
      <div
        className={
          isSelected === true
            ? "onboarding-progress-bar-item-selected"
            : "onboarding-progress-bar-item-unselected"
        }
      >
        {itemNumber}
      </div>
      <div
        className={
          isSelected === true
            ? "onboarding-progress-bar-item-selected"
            : "onboarding-progress-bar-item-unselected"
        }
      >
        {itemText}
      </div>
    </div>
  );
};

export default OnboardingProgressItem;
