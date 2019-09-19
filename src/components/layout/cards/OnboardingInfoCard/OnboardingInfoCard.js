import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const OnboardingInfoCard = ({
  style: { width, marginTop, paddingLeft, paddingRight },
  headingText,
  bodyText
}) => {
  return (
    <Card
      style={{
        width: width,
        marginTop: marginTop,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight
      }}
    >
      <Typography variant="button" gutterBottom>
        {headingText}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {bodyText}
      </Typography>
    </Card>
  );
};

export default OnboardingInfoCard;
