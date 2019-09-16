import React, { Fragment } from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DetailsContainer from "../DetailsContainer/DetailsContainer";
import InfoContainer from "../InfoContainer/InfoContainer";

const useStyles = makeStyles(theme => ({
  container: {
    height: "650px"
  },
  infoContainer: {
    background: "#25274d"
  }
}));

const OnboardingWelcomeContainer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box mx="auto" mt={3} ml={40} mr={40} boxShadow={10}>
        <Grid
          container
          align="center"
          justify="center"
          className={classes.container}
        >
          <Grid item xs={6}>
            <DetailsContainer />
          </Grid>
          <Grid item xs={6} className={classes.infoContainer}>
            <InfoContainer />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default OnboardingWelcomeContainer;
