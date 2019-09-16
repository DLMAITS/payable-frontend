import styled from "styled-components";
import { SignOut } from "styled-icons/octicons/SignOut";
import { colors, icons } from "../../../../../utils/styles/helper";

const { white, blueTintedWhite } = colors;
const { smallWidth } = icons;

const StyledSideBarBottomWrapper = styled.div`
  padding-top: 350px;
`;

const StyledSideBarBottomContainer = styled.ul`
  list-style: none;
  padding: 10px 0px;
  margin: 0;
  text-align: center;
  line-height: 5rem;
`;

const StyledSignOut = styled(SignOut)`
  color: ${blueTintedWhite};
  width: ${smallWidth};
  :hover {
    color: ${white};
  }
`;

export {
  StyledSideBarBottomWrapper,
  StyledSideBarBottomContainer,
  StyledSignOut
};
