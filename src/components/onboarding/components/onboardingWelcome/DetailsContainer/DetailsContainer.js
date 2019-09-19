import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  StyledSubTitle,
  StyledRequiredOptionsText,
  StyleTermsAndConditionsText
} from "./DetailsContainer.styled";
import OnboardingTitleText from "../../../../layout/text/OnboardingTitleText/OnboardingTitleText";
import DarkBlueTextField from "../../../../layout/textfields/DarkBlueTextField/DarkBlueTextField";
import StyledButton from "../../../../layout/buttons/StyledButton/StyledButton";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ThreeDotsSpinner from "../../../../layout/spinners/ThreeDotsSpinner";
import DarkBlueHyperlink from "../../../../layout/text/DarkBlueHyperlink/DarkBlueHyperlink";
import { ONBOARDINGCOMPANYROUTE } from "../../../../../constants/Constants";

const DetailsContainer = ({ history }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    isLoading: false
  });

  const [showPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { companyName, fullName, email, password, phoneNumber } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    setIsLoading(!isLoading);

    // TODO
    /* 
    if (isAuthenticated) {
      return <Redirect to='/onboarding/company'>
    }
    */

    history.push(ONBOARDINGCOMPANYROUTE);
  };

  const handleShowClickPassword = () => {
    setIsShowPassword(!showPassword);
  };

  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <OnboardingTitleText>Let's get started</OnboardingTitleText>
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
          <DarkBlueTextField
            id="full-name"
            label="Your Full Name"
            margin="normal"
            width="80%"
            name="fullName"
            value={fullName}
            onChange={e => onChange(e)}
          />
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
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={e => onChange(e)}
            helperText="At least 8 characters"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={handleShowClickPassword}
                    onMouseDown={handleMouseDownPassword}
                    style={{ backgroundColor: "transparent" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
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
          <DarkBlueHyperlink to="#">Terms and Conditions</DarkBlueHyperlink>
        </StyleTermsAndConditionsText>
        <StyledButton
          variant="contained"
          color="primary"
          width="60%"
          mt="30px"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Please wait" : "Create account"}
        </StyledButton>
        {isLoading && <ThreeDotsSpinner height={30} width={30} />}
      </form>
    </div>
  );
};

export default withRouter(DetailsContainer);
