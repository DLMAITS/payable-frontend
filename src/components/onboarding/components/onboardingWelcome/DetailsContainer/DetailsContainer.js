import React, { useState } from "react";
import "./DetailsContainer.css";
import { TextField, Button, withStyles, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const AdjustedTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#25274d"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#25274d"
    }
  }
})(TextField);

const CreateAccountButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "darkgreen"
    }
  }
}))(Button);

const useStyles = makeStyles({
  button: {
    marginTop: "50px",
    width: "60%"
  },
  root: {
    "& label.Mui-focused": {
      color: "#25274d"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#25274d"
    }
  }
});

const DetailsContainer = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    telephone: ""
  });

  return (
    <div>
      <div>
        <div className="main-title">Let's get started</div>
        <div className="sub-title">
          No hidden fees. Working capital made simple
        </div>
        <div className="small-text required-options-text">
          * All fields are required
        </div>
      </div>
      <form className="form" autoComplete="off">
        <AdjustedTextField
          id="company-name"
          label="Company Name"
          margin="normal"
          className="textfield-full-width"
        />
        <div>
          <span>
            <TextField
              id="first-name"
              label="First Name"
              margin="normal"
              className={"textfield-half-width" + " " + classes.root}
            />{" "}
          </span>
          <span>
            <AdjustedTextField
              id="last-name"
              label="Last Name"
              margin="normal"
              className="textfield-half-width"
            />
          </span>
        </div>
        <div>
          <AdjustedTextField
            id="email"
            label="Email"
            margin="normal"
            className="textfield-full-width"
          />
        </div>
        <div>
          <AdjustedTextField
            id="phone-number"
            label="Phone Number"
            margin="normal"
            className="textfield-full-width"
          />
        </div>
      </form>
      <div className="small-text terms-and-conditions-text">
        <span>By creating an account, you agree to our </span>
        <Link to="#">Terms</Link>
        <span> and </span>
        <Link to="#">Conditions</Link>
      </div>
      <CreateAccountButton
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Create Account
      </CreateAccountButton>
    </div>
  );
};

export default DetailsContainer;
