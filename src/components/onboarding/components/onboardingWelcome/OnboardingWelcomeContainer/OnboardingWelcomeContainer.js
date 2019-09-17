import React, { Fragment } from "react";
import { Grid, Box, Hidden } from "@material-ui/core";
import DetailsContainer from "../DetailsContainer/DetailsContainer";
import InfoContainer from "../InfoContainer/InfoContainer";
import {
  StyledGridContainer,
  DarkBlueGridItem,
  useStyles
} from "./OnboardingWelcomeContainer.styled";

const OnboardingWelcomeContainer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box mt={2} boxShadow={10} m="auto" className={classes.box}>
        <StyledGridContainer container align="center" justify="center">
          <Grid item xs={12} sm={12} md={6}>
            <DetailsContainer />
          </Grid>
          <Hidden smDown>
            <DarkBlueGridItem item md={6}>
              <InfoContainer />
            </DarkBlueGridItem>
          </Hidden>
        </StyledGridContainer>
      </Box>
    </Fragment>
  );
};

export default OnboardingWelcomeContainer;
