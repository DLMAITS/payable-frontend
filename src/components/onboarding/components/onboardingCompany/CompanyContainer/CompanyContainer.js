import React, { useState } from "react";
import OnboardingBox from "../../../../layout/boxes/OnboardingBox/OnboardingBox";
import OnboardingTitleText from "../../../../layout/text/OnboardingTitleText/OnboardingTitleText";
import DarkBlueTextField from "../../../../layout/textfields/DarkBlueTextField/DarkBlueTextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { styledConfig } from "./CompanyContainer.styled";
import LightBlueSwitch from "../../../../layout/switches/LightBlueSwitch/LightBlueSwitch";
import CurrencyTextField from "../../../../layout/textfields/CurrencyTextField/CurrencyTextField";
import StyledButton from "../../../../layout/buttons/StyledButton/StyledButton";
import DarkBlueHyperlink from "../../../../layout/text/DarkBlueHyperlink/DarkBlueHyperlink";

const CompanyContainer = () => {
  const [isVatRegistered, setIsVatRegistered] = useState(false);
  const [isWebsite, setIsWebsite] = useState(false);
  const [isTradingAddressDifferent, setIsTradingAddressDifferent] = useState(
    false
  );

  const handleIsVatRegistrationCheckBoxTicked = e => {
    setIsVatRegistered(!isVatRegistered);
  };

  const handleIsWebsiteCheckBoxTicked = e => {
    setIsWebsite(!isWebsite);
  };

  const handleIsTradingAddressDifferentCheckBoxTicked = e => {
    setIsTradingAddressDifferent(!isTradingAddressDifferent);
  };

  return (
    <OnboardingBox {...styledConfig.boxContainer}>
      <OnboardingTitleText>Company Details</OnboardingTitleText>
      <form autoComplete="off">
        <DarkBlueTextField
          id="company-name"
          label="AITS TECHNOLOGY LTD."
          margin="normal"
          width="80%"
          name="companyName"
          disabled
        />
        <DarkBlueTextField
          id="company-registered-address"
          label="Company registered address"
          margin="normal"
          width="80%"
          name="companyRegisteredAddress"
          rowsMax="4"
          multiline
        />
        <div {...styledConfig.switchHoldContainer}>
          <Typography component="div">
            <Grid {...styledConfig.switchGridContainer}>
              <Grid {...styledConfig.vatRegisterGridItem}>VAT Registered?</Grid>
              <Grid item>No</Grid>
              <Grid item>
                <LightBlueSwitch
                  onChange={e => handleIsVatRegistrationCheckBoxTicked(e)}
                  checked={isVatRegistered}
                />
              </Grid>
              <Grid item>Yes</Grid>
            </Grid>
          </Typography>
        </div>
        {isVatRegistered && (
          <DarkBlueTextField
            id="company-vat-registration-number"
            label="VAT registration number"
            margin="normal"
            width="80%"
            name="companyVatRegistrationNumber"
          />
        )}
        <div {...styledConfig.switchHoldContainer}>
          <Typography component="div">
            <Grid {...styledConfig.switchGridContainer}>
              <Grid {...styledConfig.websiteGridItem}>Company website?</Grid>
              <Grid item>No</Grid>
              <Grid item>
                <LightBlueSwitch
                  onChange={e => handleIsWebsiteCheckBoxTicked(e)}
                  checked={isWebsite}
                />
              </Grid>
              <Grid item>Yes</Grid>
            </Grid>
          </Typography>
        </div>
        {isWebsite && (
          <DarkBlueTextField
            id="company-website"
            label="Company website"
            margin="normal"
            width="80%"
            name="companyWebsite"
          />
        )}
        <div {...styledConfig.switchHoldContainer}>
          <Typography component="div">
            <Grid {...styledConfig.switchGridContainer}>
              <Grid {...styledConfig.registeredGridItemText}>
                Trading address same as registered address?
              </Grid>
              <Grid item>No</Grid>
              <Grid item>
                <LightBlueSwitch
                  onChange={e =>
                    handleIsTradingAddressDifferentCheckBoxTicked(e)
                  }
                  checked={isTradingAddressDifferent}
                />
              </Grid>
              <Grid item>Yes</Grid>
            </Grid>
          </Typography>
        </div>
        {isTradingAddressDifferent && (
          <DarkBlueTextField
            id="company-trading-address"
            label="Company trading address"
            margin="normal"
            width="80%"
            name="companyTradingAddress"
            rowsMax="4"
            multiline
          />
        )}
        <CurrencyTextField
          labelText="How much funding would you be looking for?"
          width="80%"
          currency="£"
          marginTop="40px"
        />
        <div {...styledConfig.dataRightsHoldContainer}>
          <Typography component="div">
            <Grid {...styledConfig.switchGridContainer}>
              <Grid {...styledConfig.websiteGridItem}>
                Do you agree to let us process data along these{" "}
                <DarkBlueHyperlink to="#">guidelines</DarkBlueHyperlink>?
              </Grid>
              <Grid item>No</Grid>
              <Grid item>
                <LightBlueSwitch />
              </Grid>
              <Grid item>Yes</Grid>
            </Grid>
          </Typography>
        </div>
        <StyledButton
          variant="contained"
          color="primary"
          width="60%"
          mt="30px"
          type="submit"
        >
          Please wait
        </StyledButton>
      </form>
    </OnboardingBox>
  );
};

export default CompanyContainer;

// {isLoading ? "Please wait" : "Create account"}
