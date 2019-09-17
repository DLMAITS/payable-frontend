import styled from "styled-components";
import { colors } from "../../../../utils/styles/helper";
import { Eye } from "styled-icons/fa-regular/Eye";
import { makeStyles } from "@material-ui/core";

const { shadowTintedWhite, darkBlue } = colors;

const useStyles = makeStyles(theme => ({
  box: {
    maxWidth: "1000px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "80%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75%",
      minWidth: "450px"
    }
  }
}));

const StyledOnboardingNavigationBarContainer = styled.div`
  width: 100%;
  height: 100px;
  -moz-box-shadow: 0px 0px 0px 0px ${shadowTintedWhite};
  -webkit-box-shadow: 0px 0px 0px 0px ${shadowTintedWhite};
  box-shadow: 1px 5px 5px 0px ${shadowTintedWhite};
`;

const StyledOnboardingNavigationBarLogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  padding-left: 40px;
  line-height: 100px;
`;

const StyledOnboardingNavigationBarLogo = styled(Eye)`
  color: ${darkBlue};
  vertical-align: middle;
  width: 20%;
`;

const StyledOnboardingNavigationBarProgressBar = styled.div`
  margin: 0 auto;
  line-height: 100px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 0rem;
  width: 1000px;
`;

export {
  StyledOnboardingNavigationBarContainer,
  StyledOnboardingNavigationBarLogoContainer,
  StyledOnboardingNavigationBarLogo,
  StyledOnboardingNavigationBarProgressBar,
  useStyles
};
