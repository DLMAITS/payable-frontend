import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  ONBOARDINGWELCOMEROUTE,
  ONBOARDINGCOMPANYROUTE,
  ONBOARDINGCOMPANYFINANCIALSROUTE,
  ONBOARDINGACCOUNTSETUPROUTE
} from "../../../../constants/Constants";
import {
  StyledOnboardingNavigationBarContainer,
  StyledOnboardingNavigationBarLogoContainer,
  StyledOnboardingNavigationBarLogo
} from "./OnboardingNavigationBar.styled";
import { Hidden } from "@material-ui/core";

import OnboardingNavigationStepper from "../OnboardingNavigationStepper/OnboardingNavigationStepper";

const OnboardingNavigationBar = ({ history }) => {
  const path = history.location.pathname;
  const [progressNumber, setProgressNumber] = useState(0);

  useEffect(() => {
    var adjustedPath;
    if (path[path.length - 1] === "/") {
      adjustedPath = path.slice(0, path.length - 1);
    } else {
      adjustedPath = path;
    }

    switch (adjustedPath) {
      case ONBOARDINGWELCOMEROUTE:
        setProgressNumber(0);
        return;
      case ONBOARDINGCOMPANYROUTE:
        setProgressNumber(1);
        return;
      case ONBOARDINGCOMPANYFINANCIALSROUTE:
        setProgressNumber(2);
        return;
      case ONBOARDINGACCOUNTSETUPROUTE:
        setProgressNumber(3);
        return;
      default:
        setProgressNumber(0);
    }
  }, [path, setProgressNumber]);

  return (
    <StyledOnboardingNavigationBarContainer>
      <Hidden smDown>
        <StyledOnboardingNavigationBarLogoContainer>
          <StyledOnboardingNavigationBarLogo />
        </StyledOnboardingNavigationBarLogoContainer>
      </Hidden>
      <OnboardingNavigationStepper activeNumber={progressNumber} />
    </StyledOnboardingNavigationBarContainer>
  );
};

export default withRouter(OnboardingNavigationBar);
