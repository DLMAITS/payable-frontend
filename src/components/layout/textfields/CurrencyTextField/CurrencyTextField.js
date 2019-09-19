import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { colors } from "../../../../utils/styles/helper";
import styled from "styled-components";

const { darkBlue } = colors;

const StyledInputLabel = styled(InputLabel)`
  &.MuiFormLabel-root.Mui-focused {
    color: ${darkBlue};
  }
`;

const StyledInput = styled(Input)`
  &.MuiInput-underline:before {
    border-bottom: 1px solid ${darkBlue};
  }
  &.MuiInput-underline:after {
    border-bottom: 2px solid ${darkBlue};
  }
  &.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid ${darkBlue};
  }
`;

const CurrencyTextField = ({ labelText, width, currency, marginTop }) => {
  return (
    <div style={{ width: width, marginTop: marginTop }}>
      <FormControl fullWidth>
        <StyledInputLabel htmlFor="adornment-amount">
          {labelText}
        </StyledInputLabel>
        <StyledInput
          id="adornment-amount"
          startAdornment={
            <InputAdornment position="start">{currency}</InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default CurrencyTextField;
