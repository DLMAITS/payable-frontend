import React, { Fragment } from "react";
import OnboardingBox from "../../../../layout/boxes/OnboardingBox/OnboardingBox";
import OnboardingGridContainer from "../../../../layout/grids/OnboardingGridContainer/OnboardingGridContainer";
import styledConfig from "./OnboardingAccountSetupContainer.styled";
import Grid from "@material-ui/core/Grid";
import AccountSetupContainer from "../AccountSetupContainer/AccountSetupContainer";

const OnboardingAccountSetupContainer = () => {
  return (
    <Fragment>
      <OnboardingBox {...styledConfig.boxContainer}>
        <OnboardingGridContainer>
          <Grid {...styledConfig.gridItem}>
            <AccountSetupContainer />
          </Grid>
          <Grid {...styledConfig.gridItem}></Grid>
        </OnboardingGridContainer>
      </OnboardingBox>
    </Fragment>
  );
};

export default OnboardingAccountSetupContainer;
