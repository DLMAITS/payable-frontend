import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { styledConfig } from "./AccountingGridContainer.styled";
import OnboardingSubTitleText from "../../../../../layout/text/OnboardingSubTitleText/OnboardingSubTitleText";
import { Link } from "react-router-dom";
import {
  StyledCheckCircle,
  StyledRadioCircle
} from "../CompanyFinancialsContainer.styled";

import { User } from "styled-icons/boxicons-regular/User";
import { colors } from "../../../../../../utils/styles/helper";

const { midBlue } = colors;

const AccountingGridContainer = () => {
  const [iconObject, setIconObject] = useState({
    xero: false,
    quickbooks: false,
    intuit: false,
    sagefifty: false,
    opera: false,
    tasbooks: false
  });

  const onClick = (e, key) => {
    setIconObject({ ...iconObject, [key]: !iconObject[key] });
  };

  return (
    <Fragment>
      <OnboardingSubTitleText>
        Optionally, connect your accounting software
      </OnboardingSubTitleText>
      <div style={styledConfig.wrapperContainer}>
        <Grid {...styledConfig.gridContainer}>
          {Object.keys(iconObject).map((key, index) => (
            <Grid {...styledConfig.gridItem} key={key}>
              <Link to="#" onClick={e => onClick(e, key, index)}>
                <Paper>
                  <span>
                    <User height={100} width={80} color={midBlue} />
                    {iconObject[key] ? (
                      <StyledCheckCircle {...styledConfig.checkCircle} />
                    ) : (
                      <StyledRadioCircle {...styledConfig.radioCircle} />
                    )}
                  </span>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default AccountingGridContainer;
