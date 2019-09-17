import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  StyledMainTitle,
  StyledSubTitle,
  StyledRequiredOptionsText,
  StyleTermsAndConditionsText,
  StyledTermsAndConditionsHyperlink
} from "./DetailsContainer.styled";
import { DarkBlueTextField } from "../../../../layout/textfields/DarkBlueTextField/DarkBlueTextField";
import { SubmitButton } from "../../../../layout/buttons/SubmitButton/SubmitButton";

const DetailsContainer = ({ history }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: ""
  });

  const {
    companyName,
    firstName,
    lastName,
    email,
    password,
    phoneNumber
  } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    // TODO
    /* 
    if (isAuthenticated) {
      return <Redirect to='/onboarding/company'>
    }
    */
    history.push("/onboarding/company");
  };

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
      <form autoComplete="off" onSubmit={e => onSubmit(e)}>
        <DarkBlueTextField
          id="company-name"
          label="Company Name"
          margin="normal"
          width="80%"
          name="companyName"
          value={companyName}
          onChange={e => onChange(e)}
          helperText="The company's legal name"
        />
        <div>
          <span>
            <DarkBlueTextField
              id="first-name"
              label="First Name"
              margin="normal"
              width="40%"
              name="firstName"
              value={firstName}
              onChange={e => onChange(e)}
            />{" "}
          </span>
          <span>
            <DarkBlueTextField
              id="last-name"
              label="Last Name"
              margin="normal"
              width="40%"
              name="lastName"
              value={lastName}
              onChange={e => onChange(e)}
            />
          </span>
        </div>
        <div>
          <DarkBlueTextField
            id="email"
            label="Email"
            margin="normal"
            width="80%"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div>
          <DarkBlueTextField
            id="password"
            label="Password"
            margin="normal"
            width="80%"
            type="password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            helperText="At least 8 characters"
          />
        </div>
        <div>
          <DarkBlueTextField
            id="phone-number"
            label="Phone Number"
            margin="normal"
            width="80%"
            name="phoneNumber"
            value={phoneNumber}
            onChange={e => onChange(e)}
          />
        </div>
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
          type="submit"
        >
          Create Account
        </SubmitButton>
      </form>
    </div>
  );
};

export default withRouter(DetailsContainer);
