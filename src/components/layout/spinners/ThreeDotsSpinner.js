import React from "react";
import Loader from "react-loader-spinner";
import { colors } from "../../../utils/styles/helper";

const { green } = colors;

const ThreeDotsSpinner = ({ height, width }) => {
  return (
    <Loader type="ThreeDots" color={green} height={height} width={width} />
  );
};

export default ThreeDotsSpinner;
