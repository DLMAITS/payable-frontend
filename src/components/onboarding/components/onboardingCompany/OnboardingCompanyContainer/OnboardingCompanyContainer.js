import React, { Fragment } from "react";
import OnboardingBox from "../../../../layout/boxes/OnboardingBox/OnboardingBox";
import OnboardingGridContainer from "../../../../layout/grids/OnboardingGridContainer/OnboardingGridContainer";
import styledConfig from "./OnboardingCompanyContainer.styled";
import Grid from "@material-ui/core/Grid";
import CompanyContainer from "../CompanyContainer/CompanyContainer";
import InfoContainer from "../InfoContainer/InfoContainer";

const OnboardingCompanyContainer = () => {
  return (
    <Fragment>
      <OnboardingBox {...styledConfig.boxContainer}>
        <OnboardingGridContainer>
          <Grid {...styledConfig.gridItem}>
            <CompanyContainer />
          </Grid>
          <Grid {...styledConfig.gridItem}>
            <InfoContainer />
          </Grid>
        </OnboardingGridContainer>
      </OnboardingBox>
    </Fragment>
  );
};

export default OnboardingCompanyContainer;
