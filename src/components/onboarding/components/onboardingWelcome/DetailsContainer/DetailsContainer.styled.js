import styled from "styled-components";
import { StyledBaseText } from "../../../../layout/text/BaseText/BaseText.styled";
import { colors } from "../../../../../utils/styles/helper";
import { Link } from "react-router-dom";
import DarkBlueTextField from "../../../../layout/textfields/DarkBlueTextField/DarkBlueTextField";

const { darkBlue, grey } = colors;

const StyledSubTitle = styled(StyledBaseText)`
  line-height: 15px;
  text-align: center;
  font-size: 18px;
  padding-top: 20px;
  color: ${grey};
`;

const StyledRequiredOptionsText = styled(StyledSubTitle)`
  line-height: 10px;
  text-align: left;
  padding-top: 30px;
  margin-left: 10%;
  font-size: 14px;
`;

const StyleTermsAndConditionsText = styled(StyledSubTitle)`
  line-height: 15px;
  text-align: center;
  width: 80%;
  font-size: 14px;
`;

const StyledTermsAndConditionsHyperlink = styled(Link)`
  text-decoration: underline;
  color: ${darkBlue};
`;

const StyledDarkBlueTextField = styled(DarkBlueTextField)`
  width: ${props => props.width};
`;

export {
  StyledSubTitle,
  StyledRequiredOptionsText,
  StyleTermsAndConditionsText,
  StyledTermsAndConditionsHyperlink,
  StyledDarkBlueTextField
};
