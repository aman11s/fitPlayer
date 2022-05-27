import React from "react";
import { Link } from "react-router-dom";

const loginFormDetails = [
  {
    id: 1,
    label: "Email Address",
    name: "email",
  },

  {
    id: 2,
    label: "Password",
    name: "password",
  },
];

export const Login = () => {
  return (
    <>
      <main className="main-min-height container-flex-center">
        <form className="auth-form p-4 radius-5 shadow">
          <h4 className="h4 mb-4 text-center">Login</h4>

          {loginFormDetails.map(({ id, label, name }) => {
            return (
              <label key={id}>
                <div className="mb-1">{label}</div>
                <input
                  type={name}
                  name={name}
                  placeholder={`Enter your ${name}`}
                  className="px-2 py-1 mb-3 auth-input"
                  required
                />
              </label>
            );
          })}

          <div className="container-flex">
            <label>
              <input type="checkbox" />
              <span className="avoid-text-highlight"> Remember me</span>
            </label>
          </div>

          <button className="btn mt-2 primary-solid-btn">Login</button>
          <button type="button" className="btn mt-2 primary-solid-btn">
            Use test credentials
          </button>

          <Link
            to={"/signup"}
            className="container-flex-center text-color mt-3"
          >
            Create New Account
            <i className="right-arrow-icon bx bx-chevron-right"></i>
          </Link>
        </form>
      </main>
    </>
  );
};
