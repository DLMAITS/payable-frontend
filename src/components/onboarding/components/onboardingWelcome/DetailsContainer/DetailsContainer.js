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
import { IconButton } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import ThreeDotsSpinner from "../../../../layout/spinners/ThreeDotsSpinner";

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

    //history.push("/onboarding/company");
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
          disabled={isLoading}
        >
          {isLoading ? "Please wait" : "Create account"}
        </SubmitButton>
        {isLoading && <ThreeDotsSpinner height={30} width={30} />}
      </form>
    </div>
  );
};

export default withRouter(DetailsContainer);
