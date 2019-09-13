import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import OnboardingWelcomeContainer from "../onboarding/onboardingWelcome/OnboardingWelcomeContainer/OnboardingWelcomeContainer";
import OnboardingIdUploadContainer from "../onboarding/onboardingIdUpload/OnboardingIdUploadContainer/OnboardingIdUploadContainer";
import OnboardingIdExtractionContainer from "../onboarding/onboardingIdExtraction/OnboardingIdExtractionContainer/OnboardingIdExtractionContainer";
import OnboardingCompanySearchResultsContainer from "../onboarding/onboardingCompanySearchResults/OnboardingCompanySearchResultsContainer/OnboardingCompanySearchResultsContainer";
import OnboardingCompanyExtractionContainer from "../onboarding/onboardingCompanyExtraction/OnboardingCompanyExtractionContainer/OnboardingCompanyExtractionContainer";
import OnboardingCompanyShareholdersContainer from "../onboarding/onboardingCompanyShareholders/OnboardingCompanyShareholdersContainer/OnboardingCompanyShareholdersContainer";
import OnboardingCompanyChecksContainer from "../onboarding/onboardingCompanyChecks/OnboardingCompanyChecksContainer/OnboardingCompanyChecksContainer";
import OnboardingAccountSetupContainer from "../onboarding/onboardingAccountSetup/OnboardingAccountSetupContainer/OnboardingAccountSetupContainer";
import {
  ONBOARDINGWELCOMEROUTE,
  ONBOARDINGIDUPLOADROUTE,
  ONBOARDINGIDEXTRACTIONROUTE,
  ONBOARDINGCOMPANYSEARCHRESULTSROUTE,
  ONBOARDINGCOMPANYEXTRACTIONROUTE,
  ONBOARDINGCOMPANYSHAREHOLDERSROUTE,
  ONBOARDINGCOMPANYCHECKSROUTE,
  ONBOARDINGACCOUNTSETUPROUTE
} from "../../constants/Constants";

const OnboardingRoutes = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path={ONBOARDINGWELCOMEROUTE}
          component={OnboardingWelcomeContainer}
        />
        <Route
          exact
          path={ONBOARDINGIDUPLOADROUTE}
          component={OnboardingIdUploadContainer}
        />
        <Route
          exact
          path={ONBOARDINGIDEXTRACTIONROUTE}
          component={OnboardingIdExtractionContainer}
        />
        <Route
          exact
          path={ONBOARDINGCOMPANYSEARCHRESULTSROUTE}
          component={OnboardingCompanySearchResultsContainer}
        />
        <Route
          exact
          path={ONBOARDINGCOMPANYEXTRACTIONROUTE}
          component={OnboardingCompanyExtractionContainer}
        />
        <Route
          exact
          path={ONBOARDINGCOMPANYSHAREHOLDERSROUTE}
          component={OnboardingCompanyShareholdersContainer}
        />
        <Route
          exact
          path={ONBOARDINGCOMPANYCHECKSROUTE}
          component={OnboardingCompanyChecksContainer}
        />
        <Route
          exact
          path={ONBOARDINGACCOUNTSETUPROUTE}
          component={OnboardingAccountSetupContainer}
        />
      </Switch>
    </Fragment>
  );
};

export default OnboardingRoutes;
