import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
  StyledNavigationBarContainer,
  StyledNavigationBarTitle,
  StyledNavigationBarHyperlink,
  StyledNavigationBarHeader
} from "./NavigationBar.styled";

const NavigationBar = ({ title, headers, history }) => {
  const path = history.location.pathname;

  return (
    <Fragment>
      <StyledNavigationBarContainer>
        <StyledNavigationBarTitle>{title} </StyledNavigationBarTitle>
        {Object.keys(headers).map(function(key) {
          return (
            <span key={key}>
              <StyledNavigationBarHyperlink to={headers[key]}>
                <StyledNavigationBarHeader
                  path={path}
                  currentHeader={headers[key]}
                >
                  {key}{" "}
                </StyledNavigationBarHeader>
              </StyledNavigationBarHyperlink>
            </span>
          );
        })}
      </StyledNavigationBarContainer>
    </Fragment>
  );
};

export default withRouter(NavigationBar);
