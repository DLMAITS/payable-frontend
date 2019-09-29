import styled from "styled-components";
import { CheckCircle } from "styled-icons/boxicons-solid/CheckCircle";
import { RadioCircle } from "styled-icons/boxicons-regular/RadioCircle";
import { colors } from "../../../../../utils/styles/helper";

const { green, darkBlue, midBlue } = colors;

const styledConfig = {
  boxContainer: {
    mb: 2,
    boxShadow: 10,
    height: "100%"
  },
  midDivider: {
    variant: "middle",
    style: {
      marginTop: "50px"
    }
  },
  bottomDivider: {
    variant: "middle",
    style: {
      marginTop: "30px"
    }
  },
  connectBankAccountButton: {
    variant: "contained",
    color: "primary",
    width: "60%",
    mt: "30px",
    type: "submit",
    style: { marginTop: "50px" },
    backgroundcolor: midBlue,
    backgroundcoloronhover: darkBlue
  },
  checkCircle: {
    height: 25,
    width: 25
  },
  radioCircle: {
    height: 25,
    width: 25
  },
  continueButton: {
    variant: "contained",
    color: "primary",
    width: "60%",
    mt: "25px",
    type: "submit"
  },
  spinner: {
    height: 30,
    width: 30
  }
};

const StyledCheckCircle = styled(CheckCircle)`
  color: ${green};
`;

const StyledRadioCircle = styled(RadioCircle)`
  color: ${darkBlue};
`;

export { styledConfig, StyledCheckCircle, StyledRadioCircle };
