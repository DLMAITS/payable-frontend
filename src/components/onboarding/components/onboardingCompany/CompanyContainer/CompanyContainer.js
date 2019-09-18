import React, { useState } from "react";
import OnboardingBox from "../../../../layout/boxes/OnboardingBox/OnboardingBox";
import OnboardingTitleText from "../../../../layout/text/OnboardingTitleText/OnboardingTitleText";
import DarkBlueTextField from "../../../../layout/textfields/DarkBlueTextField/DarkBlueTextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { styledConfig } from "./CompanyContainer.styled";
import LightBlueSwitch from "../../../../layout/switches/LightBlueSwitch/LightBlueSwitch";

const CompanyContainer = () => {
  const [isVatRegistered, setIsVatRegistered] = useState(false);
  const [isWebsite, setIsWebsite] = useState(false);

  const handleIsVatRegistrationCheckBoxTicked = e => {
    setIsVatRegistered(!isVatRegistered);
  };

  const handleIsWebsiteCheckBoxTicked = e => {
    setIsWebsite(!isWebsite);
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
          id="company-address"
          label="Company registered address"
          margin="normal"
          width="80%"
          name="companyAddress"
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
      </form>
    </OnboardingBox>
  );
};

export default CompanyContainer;
