import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import FOOTER from "./footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import userServices from "../Services/UserServices";

const Login = () => {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const UserError = () => {
    toast.error("Username cannot contain Special character!", {
      position: "top-center",
    });
  };
  const UserLengthError = () => {
    toast.error("User Name should be more than 2 Letters", {
      position: "top-center",
    });
  };
  const PasswordLengthError = () => {
    toast.error("Password should be more than 6 digits", {
      position: "top-center",
    });
  };
  return (
    <div className="App" style={{ backgroundColor: "#D3D3D3" }}>
      <div
        className="LoginForm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <form>
            <div className="IMAGE">
              <img
                src="https://raw.githubusercontent.com/ipenywis/react-login-register/e00bd4637183df94e54c8a19a80b5262834da8f7/src/login.svg"
                style={{ height: 170, width: 250 }}
              />
            </div>
            <h3>Login</h3>

            <div className="form-group">
              <label> Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="User name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </form>
          <button
            type="button"
            class="btn btn-primary"
            style={{ marginBottom: "10px" }}
            onClick={(e) => {
              if (username.length <= 2) {
                {
                  UserLengthError();
                }
              } else if (username.includes("@")) {
                {
                  UserError();
                }
              } else if (password.length <= 6) {
                {
                  PasswordLengthError();
                }
              } else {
                userServices
                  .login(username, password)
                  .then((data) => {
                    toast.success(data.message, {
                      position: "top-center",
                    });
                    window.location = "/";
                  })
                  .catch((data) => {
                    console.log("hajsd");
                    toast.error(data.message, {
                      position: "top-center",
                    });
                  });
              }
            }}
          >
            Login
          </button>
          <p className="forgot-password text-right">
            Create an account?
            <Link to="/signup">sign up</Link>
          </p>
        </div>
        <ToastContainer />
      </div>
      <FOOTER />
    </div>
  );
};

export default Login;
