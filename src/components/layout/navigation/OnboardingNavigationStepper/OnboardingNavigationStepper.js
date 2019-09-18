import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { colors } from "../../../../utils/styles/helper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const { darkBlue } = colors;

const muiTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$active": {
          color: darkBlue
        },
        "&$completed": {
          color: darkBlue
        }
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    width: "70%",
    minWidth: "500px",
    margin: "0 auto",
    paddingTop: "12px"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Get Started", "Company Details", "Company Financials", "Finalise"];
}

export default function OnboardingNavigationStepper({ activeNumber }) {
  const classes = useStyles();
  const steps = getSteps();

  function isStepOptional(step) {
    return false;
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={muiTheme}>
        <Stepper activeStep={activeNumber}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </MuiThemeProvider>
    </div>
  );
}
