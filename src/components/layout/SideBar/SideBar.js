import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
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

const SideBar = () => {
  const [optionSelected, setOptionSelected] = useState({
    selectedIcon: null
  });

  return (
    <div className="sidebar-container">
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
                  (optionSelected.selectedIcon === DASHBOARD ? "selected" : "")
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
                  (optionSelected.selectedIcon === INVOICES ? "selected" : "")
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
                  (optionSelected.selectedIcon === EXCHANGE ? "selected" : "")
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
                  (optionSelected.selectedIcon === USER ? "selected" : "")
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
    </div>
  );
};

export default SideBar;
