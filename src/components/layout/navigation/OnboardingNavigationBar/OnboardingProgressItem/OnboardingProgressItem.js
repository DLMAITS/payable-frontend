import React from "react";
import {
  StyledOnboardingProgressItemElement,
  useStyles
} from "./OnboardingProgressItem.styled";
import { Hidden } from "@material-ui/core";

const OnboardingProgressItem = props => {
  const classes = useStyles();
  const { itemNumber, itemText, isSelected } = props;
  return (
    <div>
      <StyledOnboardingProgressItemElement
        isSelected={isSelected}
        className={classes.number}
      >
        {itemNumber}
      </StyledOnboardingProgressItemElement>
      <Hidden smDown>
        <StyledOnboardingProgressItemElement isSelected={isSelected}>
          {itemText}
        </StyledOnboardingProgressItemElement>
      </Hidden>
    </div>
  );
};

export default OnboardingProgressItem;
