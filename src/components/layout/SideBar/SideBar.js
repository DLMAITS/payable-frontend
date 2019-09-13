import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { Link, withRouter } from "react-router-dom";
import {
  DASHBOARD,
  INVOICES,
  EXCHANGE,
  USER
} from "../../../constants/Constants";
import {
  DASHBOARDHOMEROUTE,
  INVOICESROUTE,
  EXCHANGEROUTE,
  USERROUTE
} from "../../../constants/Constants";

const SideBar = ({ history }) => {
  const [optionSelected, setOptionSelected] = useState({
    selectedIcon: null
  });

  const path = history.location.pathname;

  useEffect(() => {
    const splitPath = path.split("/");
    const parentOfSplitPath = "/" + splitPath[1];

    // For the first element of the split path
    switch (parentOfSplitPath) {
      case DASHBOARDHOMEROUTE:
        setOptionSelected({ selectedIcon: DASHBOARD });
        break;
      case INVOICESROUTE:
        setOptionSelected({ selectedIcon: INVOICES });
        break;
      case EXCHANGEROUTE:
        setOptionSelected({ selectedIcon: EXCHANGE });
        break;
      case USERROUTE:
        setOptionSelected({ selectedIcon: USER });
        break;
      default:
        break;
    }
  }, [path]);

  return (
    <nav className="sidebar-container">
      <Link to="/">
        <div className="sidebar-logo-container">
          <i className="fas fa-eye sidebar-logo fa-lg"></i>
        </div>
      </Link>
      <div className="sidebar-line"></div>
      <div>
        <ul>
          <li>
            <Link
              to={DASHBOARDHOMEROUTE}
              onClick={e => setOptionSelected({ selectedIcon: DASHBOARD })}
            >
              <i
                className={
                  "fas fa-home fa-lg " +
                  (optionSelected.selectedIcon === DASHBOARD ||
                  path === DASHBOARDHOMEROUTE
                    ? "selected"
                    : "unselected")
                }
              ></i>
            </Link>
          </li>
          <li>
            <Link
              to={INVOICESROUTE}
              onClick={e => setOptionSelected({ selectedIcon: INVOICES })}
            >
              <i
                className={
                  "fas fa-file fa-lg " +
                  (optionSelected.selectedIcon === INVOICES ||
                  path === INVOICESROUTE
                    ? "selected"
                    : "unselected")
                }
              ></i>
            </Link>
          </li>
          <li>
            <Link
              to={EXCHANGEROUTE}
              onClick={e => setOptionSelected({ selectedIcon: EXCHANGE })}
            >
              <i
                className={
                  "fas fa-exchange-alt fa-lg " +
                  (optionSelected.selectedIcon === EXCHANGE ||
                  path === EXCHANGEROUTE
                    ? "selected"
                    : "unselected")
                }
              ></i>
            </Link>
          </li>
          <li>
            <Link
              to={USERROUTE}
              onClick={e => setOptionSelected({ selectedIcon: USER })}
            >
              <i
                className={
                  "fas fa-user fa-lg " +
                  (optionSelected.selectedIcon === USER || path === USERROUTE
                    ? "selected"
                    : "unselected")
                }
              ></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-container-bottom">
        <div className="sidebar-line"></div>
        <div>
          <ul>
            <li>
              <Link to="/logout">
                <i className="fas fa-sign-out-alt fa-lg"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(SideBar);
