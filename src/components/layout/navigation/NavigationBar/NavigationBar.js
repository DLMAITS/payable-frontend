import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = ({ title, headers, history }) => {
  const path = history.location.pathname;

  return (
    <Fragment>
      <div className="navbar-container">
        <span className="navbar-title">{title} </span>
        {Object.keys(headers).map(function(key) {
          return (
            <span key={key}>
              <Link to={headers[key]} className="navbar-hyperlink">
                <span
                  className={
                    "navbar-header " +
                    (path === headers[key] ? "navbar-selected" : "")
                  }
                >
                  {key}{" "}
                </span>
              </Link>
            </span>
          );
        })}
      </div>
    </Fragment>
  );
};

export default withRouter(NavigationBar);
