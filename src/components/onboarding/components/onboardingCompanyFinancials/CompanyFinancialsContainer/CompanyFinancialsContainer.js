import React, { useState } from "react";
import OnboardingBox from "../../../../layout/boxes/OnboardingBox/OnboardingBox";
import OnboardingTitleText from "../../../../layout/text/OnboardingTitleText/OnboardingTitleText";
import OnboardingSubTitleText from "../../../../layout/text/OnboardingSubTitleText/OnboardingSubTitleText";
import { styledConfig } from "./CompanyFinancialsContainer.styled";
import Divider from "@material-ui/core/Divider";
import StyledButton from "../../../../layout/buttons/StyledButton/StyledButton";
import {
  StyledCheckCircle,
  StyledRadioCircle
} from "./CompanyFinancialsContainer.styled";
import AccountingGridContainer from "./AccountingGridContainer/AccountingGridContainer";
import ThreeDotsSpinner from "../../../../layout/spinners/ThreeDotsSpinner";
import { withRouter } from "react-router-dom";
import { ONBOARDINGACCOUNTSETUPROUTE } from "../../../../../constants/Constants";

const CompanyFinancials = ({ history }) => {
  const [bankAccountConnected, setBankAccountConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const bankAccountConnectedSuccessfully = e => {
    setBankAccountConnected(!bankAccountConnected);
  };

  const nextButtonSelected = e => {
    e.preventDefault();
    setIsLoading(!isLoading);

    history.push(ONBOARDINGACCOUNTSETUPROUTE);
  };

  return (
    <OnboardingBox {...styledConfig.boxContainer}>
      <OnboardingTitleText>Financials</OnboardingTitleText>
      <OnboardingSubTitleText>
        Connect your bank account and, optionally, your accounting software
      </OnboardingSubTitleText>
      <Divider {...styledConfig.midDivider} />
      <span>
        <StyledButton
          {...styledConfig.connectBankAccountButton}
          onClick={e => bankAccountConnectedSuccessfully(e)}
        >
          Connect your bank account{" "}
        </StyledButton>
        {bankAccountConnected ? (
          <StyledCheckCircle {...styledConfig.checkCircle} />
        ) : (
          <StyledRadioCircle {...styledConfig.radioCircle} />
        )}
      </span>
      <Divider {...styledConfig.midDivider} />
      <AccountingGridContainer />
      <Divider {...styledConfig.bottomDivider} />
      <StyledButton
        {...styledConfig.continueButton}
        disabled={isLoading}
        onClick={e => nextButtonSelected(e)}
      >
        {isLoading ? "Please wait" : "Next"}
      </StyledButton>
      {isLoading && <ThreeDotsSpinner {...styledConfig.spinner} />}
    </OnboardingBox>
  );
};

export default withRouter(CompanyFinancials);
