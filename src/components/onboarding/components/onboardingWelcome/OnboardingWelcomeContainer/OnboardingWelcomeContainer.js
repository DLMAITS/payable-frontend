import React, { Fragment } from "react";
import { Grid, Hidden } from "@material-ui/core";
import DetailsContainer from "../DetailsContainer/DetailsContainer";
import InfoContainer from "../InfoContainer/InfoContainer";
import { DarkBlueGridItem } from "./OnboardingWelcomeContainer.styled";
import OnboardingBox from "../../../../layout/boxes/OnboardingBox/OnboardingBox";
import { stylingConfig } from "./OnboardingWelcomeContainer.styled";
import OnboardingGridContainer from "../../../../layout/grids/OnboardingGridContainer/OnboardingGridContainer";

const OnboardingWelcomeContainer = () => {
  return (
    <Fragment>
      <OnboardingBox {...stylingConfig.box}>
        <OnboardingGridContainer>
          <Grid {...stylingConfig.gridItem}>
            <DetailsContainer />
          </Grid>
          <Hidden {...stylingConfig.hidden}>
            <DarkBlueGridItem {...stylingConfig.darkBlueGridItem}>
              <InfoContainer />
            </DarkBlueGridItem>
          </Hidden>
        </OnboardingGridContainer>
      </OnboardingBox>
    </Fragment>
  );
};

export default OnboardingWelcomeContainer;
