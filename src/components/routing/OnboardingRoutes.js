import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import OnboardingWelcomeContainer from "../onboarding/components/onboardingWelcome/OnboardingWelcomeContainer/OnboardingWelcomeContainer";
import OnboardingIdUploadContainer from "../onboarding/components/onboardingIdUpload/OnboardingIdUploadContainer/OnboardingIdUploadContainer";
import OnboardingIdExtractionContainer from "../onboarding/components/onboardingIdExtraction/OnboardingIdExtractionContainer/OnboardingIdExtractionContainer";
import OnboardingCompanySearchResultsContainer from "../onboarding/components/onboardingCompanySearchResults/OnboardingCompanySearchResultsContainer/OnboardingCompanySearchResultsContainer";
import OnboardingCompanyExtractionContainer from "../onboarding/components/onboardingCompanyExtraction/OnboardingCompanyExtractionContainer/OnboardingCompanyExtractionContainer";
import OnboardingCompanyShareholdersContainer from "../onboarding/components/onboardingCompanyShareholders/OnboardingCompanyShareholdersContainer/OnboardingCompanyShareholdersContainer";
import OnboardingCompanyChecksContainer from "../onboarding/components/onboardingCompanyChecks/OnboardingCompanyChecksContainer/OnboardingCompanyChecksContainer";
import OnboardingAccountSetupContainer from "../onboarding/components/onboardingAccountSetup/OnboardingAccountSetupContainer/OnboardingAccountSetupContainer";
import {
  ONBOARDINGWELCOMEROUTE,
  ONBOARDINGCOMPANYROUTE,
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
          path={ONBOARDINGCOMPANYROUTE}
          component={OnboardingCompanySearchResultsContainer}
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
