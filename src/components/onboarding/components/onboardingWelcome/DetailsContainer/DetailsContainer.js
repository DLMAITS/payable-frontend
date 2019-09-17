import React, { useState } from "react";
import {
  StyledMainTitle,
  StyledSubTitle,
  StyledRequiredOptionsText,
  StyleTermsAndConditionsText,
  StyledTermsAndConditionsHyperlink
} from "./DetailsContainer.styled";
import { DarkBlueTextField } from "../../../../layout/textfields/DarkBlueTextField/DarkBlueTextField";
import { SubmitButton } from "../../../../layout/buttons/SubmitButton/SubmitButton";

const DetailsContainer = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: ""
  });

  return (
    <div>
      <div>
        <StyledMainTitle>Let's get started</StyledMainTitle>
        <StyledSubTitle>
          No hidden fees. Working capital made simple
        </StyledSubTitle>
        <StyledRequiredOptionsText>
          * All fields are required
        </StyledRequiredOptionsText>
      </div>
      <form autoComplete="off">
        <DarkBlueTextField
          id="company-name"
          label="Company Name"
          margin="normal"
          width="80%"
        />
        <div>
          <span>
            <DarkBlueTextField
              id="first-name"
              label="First Name"
              margin="normal"
              width="40%"
            />{" "}
          </span>
          <span>
            <DarkBlueTextField
              id="last-name"
              label="Last Name"
              margin="normal"
              width="40%"
            />
          </span>
        </div>
        <div>
          <DarkBlueTextField
            id="email"
            label="Email"
            margin="normal"
            width="80%"
          />
        </div>
        <div>
          <DarkBlueTextField
            id="password"
            label="Password"
            margin="normal"
            width="80%"
            type="password"
          />
        </div>
        <div>
          <DarkBlueTextField
            id="phone-number"
            label="Phone Number"
            margin="normal"
            width="80%"
          />
        </div>
      </form>
      <StyleTermsAndConditionsText>
        <span>By creating an account, you agree to our </span>
        <StyledTermsAndConditionsHyperlink to="#">
          Terms and Conditions
        </StyledTermsAndConditionsHyperlink>
      </StyleTermsAndConditionsText>
      <SubmitButton
        variant="contained"
        color="primary"
        width="60%"
        mt="30px"
        onSubmit={e => console.log(formData)}
      >
        Create Account
      </SubmitButton>
    </div>
  );
};

export default DetailsContainer;
