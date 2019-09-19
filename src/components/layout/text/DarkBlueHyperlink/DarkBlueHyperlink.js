import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../../utils/styles/helper";

const { darkBlue } = colors;

const DarkBlueHyperlink = styled(Link)`
  text-decoration: underline;
  color: ${darkBlue};
`;

export default DarkBlueHyperlink;
