import React from "react";
import { StyledBaseText } from "./BaseText.styled";

const BaseText = ({ children }) => {
  return <StyledBaseText>{children}</StyledBaseText>;
};

export default BaseText;
