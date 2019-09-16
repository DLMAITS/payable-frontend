import React, { Fragment } from "react";
import { Grid, Box } from "@material-ui/core";
import DetailsContainer from "../DetailsContainer/DetailsContainer";
import InfoContainer from "../InfoContainer/InfoContainer";
import {
  StyledGridContainer,
  DarkBlueGridItem
} from "./OnboardingWelcomeContainer.styled";

const OnboardingWelcomeContainer = () => {
  return (
    <Fragment>
      <Box mx="auto" mt={3} ml={40} mr={40} boxShadow={10}>
        <StyledGridContainer container align="center" justify="center">
          <Grid item xs={6}>
            <DetailsContainer />
          </Grid>
          <DarkBlueGridItem item xs={6}>
            <InfoContainer />
          </DarkBlueGridItem>
        </StyledGridContainer>
      </Box>
    </Fragment>
  );
};

export default OnboardingWelcomeContainer;
