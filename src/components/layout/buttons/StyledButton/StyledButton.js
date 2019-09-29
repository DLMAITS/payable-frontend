import styled from "styled-components";
import { colors } from "../../../../utils/styles/helper";
import BaseButton from "../BaseButton/BaseButton";

const { green, darkGreen } = colors;

const StyledButton = styled(BaseButton)`
  && {
    color: white;
    background-color: ${props => props.backgroundcolor || green};
    width: ${props => props.width};
    margin-top: ${props => props.mt};
    :hover {
      background-color: ${props => props.backgroundcoloronhover || darkGreen};
    }
  }
`;

export default StyledButton;
