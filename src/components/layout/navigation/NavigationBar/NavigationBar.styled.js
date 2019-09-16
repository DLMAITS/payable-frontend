import styled from "styled-components";
import { colors } from "../../../../utils/styles/helper";
import { fonts } from "../../../../utils/styles/helper";
import { Link } from "react-router-dom";

const { shadowTintedWhite, darkBlue, lightBlue } = colors;
const { fontFamily } = fonts;

const StyledNavigationBarContainer = styled.div`
  -moz-box-shadow: 0px 0px 0px 0px ${shadowTintedWhite};
  -webkit-box-shadow: 0px 0px 0px 0px ${shadowTintedWhite};
  box-shadow: 2px 5px 5px 0px ${shadowTintedWhite};
  height: 4rem;
`;

const StyledNavigationBarTitle = styled.span`
  padding-left: 20px;
  padding-right: 40px;
  margin-right: 40px;
  line-height: 4rem;
  font-family: ${fontFamily};
  font-size: 24px;
  color: ${darkBlue};
  font-style: normal;
  display: inline-block;
  width: 200px;
`;

const StyledNavigationBarHyperlink = styled(Link)`
  text-decoration: none;
`;

const StyledNavigationBarHeader = styled.span`
  font-family: ${fontFamily};
  font-size: 18px;
  font-style: normal;
  padding-right: 20px;
  padding-left: 20px;
  color: ${props =>
    props.path === props.currentHeader ? darkBlue : lightBlue};
  border-left: 1px solid ${darkBlue};
`;

export {
  StyledNavigationBarContainer,
  StyledNavigationBarTitle,
  StyledNavigationBarHyperlink,
  StyledNavigationBarHeader
};
