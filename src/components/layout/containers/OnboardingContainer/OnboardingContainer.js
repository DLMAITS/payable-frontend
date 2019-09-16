import React from "react";
import { Switch, Route } from "react-router-dom";
import OnboardingNavigationBar from "../../navigation/OnboardingNavigationBar/OnboardingNavigationBar";
import OnboardingRoutes from "../../../routing/OnboardingRoutes";
import { StyledOnboardingContainer } from "./OnboardingContainer.styled";

const OnboardingContainer = () => {
  return (
    <StyledOnboardingContainer>
      <OnboardingNavigationBar />
      <Switch>
        <Route component={OnboardingRoutes} />
      </Switch>
    </StyledOnboardingContainer>
  );
};

export default OnboardingContainer;
