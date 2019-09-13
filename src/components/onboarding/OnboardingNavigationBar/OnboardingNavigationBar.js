import React, { useEffect, useState } from "react";
import "./OnboardingNavigationBar.css";
import OnboardingProgressItem from "./OnboardingProgressItem/OnboardingProgressItem";
import { withRouter } from "react-router-dom";
import {
  ONBOARDINGWELCOMEROUTE,
  ONBOARDINGIDUPLOADROUTE,
  ONBOARDINGIDEXTRACTIONROUTE,
  ONBOARDINGCOMPANYSEARCHRESULTSROUTE,
  ONBOARDINGCOMPANYEXTRACTIONROUTE,
  ONBOARDINGCOMPANYSHAREHOLDERSROUTE,
  ONBOARDINGCOMPANYCHECKSROUTE,
  ONBOARDINGACCOUNTSETUPROUTE
} from "../../../constants/Constants";

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
      text: "Welcome",
      paths: [ONBOARDINGWELCOMEROUTE]
    },
    {
      row: 1,
      text: "ID",
      paths: [ONBOARDINGIDUPLOADROUTE, ONBOARDINGIDEXTRACTIONROUTE]
    },
    {
      row: 2,
      text: "Company",
      paths: [
        ONBOARDINGCOMPANYSEARCHRESULTSROUTE,
        ONBOARDINGCOMPANYEXTRACTIONROUTE
      ]
    },
    {
      row: 3,
      text: "Shareholder",
      paths: [ONBOARDINGCOMPANYSHAREHOLDERSROUTE]
    },
    {
      row: 4,
      text: "KYC",
      paths: [ONBOARDINGCOMPANYCHECKSROUTE]
    },
    {
      row: 5,
      text: "T&Cs",
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

    console.log(adjustedPath);

    setProgressState({ highlightedState: adjustedPath });
  }, [path, setProgressState]);

  return (
    <div className="onboarding-navigation-bar">
      <div className="onboarding-navigation-bar-logo-container">
        <i className="fas fa-eye fa-3x onboarding-logo-placement"></i>
      </div>
      <div className="onboarding-navigation-bar-progress-bar">
        <div></div>
        {progressItemArray.map(item => (
          <OnboardingProgressItem
            key={item[ROW]}
            itemNumber={item[ROW]}
            itemText={item[TEXT]}
            isSelected={
              item.paths.filter(path => path === progressState.highlightedState)
                .length > 0
                ? true
                : false
            }
          />
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default withRouter(OnboardingNavigationBar);
