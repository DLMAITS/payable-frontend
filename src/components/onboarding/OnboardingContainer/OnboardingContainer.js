import React from "react";
import "./OnboardingContainer.css";
import { Switch, Route } from "react-router-dom";
import OnboardingNavigationBar from "../OnboardingNavigationBar/OnboardingNavigationBar";
import OnboardingRoutes from "../../routing/OnboardingRoutes";

const OnboardingContainer = () => {
  return (
    <div className="onboarding-container">
      <OnboardingNavigationBar />
      <Switch>
        <Route component={OnboardingRoutes} />
      </Switch>
    </div>
  );
};

export default OnboardingContainer;
