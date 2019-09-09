import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = ({ title, headers }) => {
  return (
    <Fragment>
      <div className="navbar-container">
        <span className="navbar-title">{title} </span>
        {Object.keys(headers).map(function(key) {
          return (
            <span key={key}>
              <Link to={headers[key]} className="navbar-hyperlink">
                <span className="navbar-header">{key} </span>
              </Link>
            </span>
          );
        })}
      </div>
    </Fragment>
  );
};

export default NavigationBar;
