import React, { useEffect, useState } from "react";
import OnboardingProgressItem from "./OnboardingProgressItem/OnboardingProgressItem";
import { withRouter } from "react-router-dom";
import {
  ONBOARDINGWELCOMEROUTE,
  ONBOARDINGCOMPANYROUTE,
  ONBOARDINGCOMPANYCHECKSROUTE,
  ONBOARDINGACCOUNTSETUPROUTE
} from "../../../../constants/Constants";
import {
  StyledOnboardingNavigationBarContainer,
  StyledOnboardingNavigationBarLogoContainer,
  StyledOnboardingNavigationBarLogo,
  StyledOnboardingNavigationBarProgressBar,
  useStyles
} from "./OnboardingNavigationBar.styled";
import { Hidden } from "@material-ui/core";

const OnboardingNavigationBar = ({ history }) => {
  const path = history.location.pathname;

  const [progressState, setProgressState] = useState({
    highlightedState: ""
  });

  const ROW = "row";
  const TEXT = "text";

  const progressItemArray = [
    {
      row: 0,
      text: "Get Started",
      paths: [ONBOARDINGWELCOMEROUTE]
    },
    {
      row: 1,
      text: "Company",
      paths: [ONBOARDINGCOMPANYROUTE]
    },
    {
      row: 2,
      text: "Details",
      paths: [ONBOARDINGCOMPANYCHECKSROUTE]
    },
    {
      row: 3,
      text: "Finalise",
      paths: [ONBOARDINGACCOUNTSETUPROUTE]
    }
  ];

  useEffect(() => {
    var adjustedPath;
    if (path[path.length - 1] === "/") {
      adjustedPath = path.slice(0, path.length - 1);
    } else {
      adjustedPath = path;
    }

    setProgressState({ highlightedState: adjustedPath });
  }, [path, setProgressState]);

  const classes = useStyles();

  return (
    <StyledOnboardingNavigationBarContainer>
      <Hidden smDown>
        <StyledOnboardingNavigationBarLogoContainer>
          <StyledOnboardingNavigationBarLogo />
        </StyledOnboardingNavigationBarLogoContainer>
      </Hidden>
      <StyledOnboardingNavigationBarProgressBar className={classes.box}>
        {progressItemArray.map(item => (
          <OnboardingProgressItem
            key={item[ROW]}
            itemNumber={item[ROW] + 1}
            itemText={item[TEXT]}
            isSelected={
              item.paths.filter(path => path === progressState.highlightedState)
                .length > 0
                ? true
                : false
            }
          />
        ))}
      </StyledOnboardingNavigationBarProgressBar>
    </StyledOnboardingNavigationBarContainer>
  );
};

export default withRouter(OnboardingNavigationBar);
