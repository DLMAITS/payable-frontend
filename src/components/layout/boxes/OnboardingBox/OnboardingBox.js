import React from "react";
import { Box, makeStyles } from "@material-ui/core";

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

const OnboardingBox = ({
  children,
  mt,
  mb,
  ml,
  mr,
  boxShadow,
  m,
  pt,
  pb,
  pl,
  pr,
  height
}) => {
  const classes = useStyles();
  return (
    <Box
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      height={height}
      boxShadow={boxShadow}
      m={m}
      className={classes.box}
    >
      {children}
    </Box>
  );
};

export default OnboardingBox;
