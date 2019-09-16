import styled from "styled-components";
import { colors } from "../../../../utils/styles/helper";

const { shadowTintedWhite, darkBlue } = colors;

const StyledOnboardingNavigationBarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 0rem;
  -moz-box-shadow: 0px 0px 0px 0px ${shadowTintedWhite};
  -webkit-box-shadow: 0px 0px 0px 0px ${shadowTintedWhite};
  box-shadow: 1px 5px 5px 0px ${shadowTintedWhite};
`;

const StyledOnboardingNavigationBarLogoContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  padding-left: 40px;
  line-height: 100px;
`;

const StyledOnboardingNavigationBarLogo = styled.i`
  color: ${darkBlue};
  vertical-align: middle;
`;

const StyledOnboardingNavigationBarProgressBar = styled.div`
  line-height: 100px;
  display: grid;
  grid-template-columns: 2% 16% 16% 16% 16% 16% 16% 2%;
  grid-gap: 0rem;
  width: 1000px;
`;

export {
  StyledOnboardingNavigationBarContainer,
  StyledOnboardingNavigationBarLogoContainer,
  StyledOnboardingNavigationBarLogo,
  StyledOnboardingNavigationBarProgressBar
};
