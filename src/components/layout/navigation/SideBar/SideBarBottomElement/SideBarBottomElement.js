import React from "react";
import DividerLineLight from "../../../dividers/DividerLineLight/DividerLineLight";
import { Link } from "react-router-dom";
import {
  StyledSideBarBottomWrapper,
  StyledSideBarBottomContainer,
  StyledSignOut
} from "./SideBarBottomElement.styled";

const SideBarBottomElement = () => {
  return (
    <StyledSideBarBottomWrapper>
      <DividerLineLight />
      <StyledSideBarBottomContainer>
        <li>
          <Link to="logout">
            <StyledSignOut />
          </Link>
        </li>
      </StyledSideBarBottomContainer>
    </StyledSideBarBottomWrapper>
  );
};

export default SideBarBottomElement;
