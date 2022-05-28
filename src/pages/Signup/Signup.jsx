import React from "react";
import { Link } from "react-router-dom";

const singupFormDetails = [
  {
    id: 1,
    label: "First Name",
    name: "firstName",
    placeholder: "first name",
    type: "text",
  },

  {
    id: 2,
    label: "Last Name",
    name: "lastName",
    placeholder: "last name",
    type: "text",
  },

  {
    id: 3,
    label: "Email Address",
    name: "email",
    placeholder: "email",
    type: "email",
  },

  {
    id: 4,
    label: "Password",
    name: "password",
    placeholder: "password",
    type: "password",
  },

  {
    id: 5,
    label: "Confirm Password",
    name: "confirmPassword",
    placeholder: "confirm password",
    type: "password",
  },
];

export const Signup = () => {
  return (
    <>
      <main className="container-flex-center">
        <form className="auth-form m-4 p-4 radius-5 shadow">
          <h4 className="h4 mb-4 text-center">Singup</h4>

          {singupFormDetails.map(({ id, label, name, type, placeholder }) => {
            return (
              <label key={id}>
                <div className="mb-1">{label}</div>
                <input
                  type={type}
                  name={name}
                  placeholder={`Enter your ${placeholder}`}
                  className="px-2 py-1 mb-2 auth-input"
                  required
                />
              </label>
            );
          })}

          <div className="container-flex">
            <label>
              <input type="checkbox" required />
              <span className="avoid-text-highlight">
                {" "}
                I accept all Terms & Conditions
              </span>
            </label>
          </div>

          <button className="btn mt-2 primary-solid-btn">
            Create New Account
          </button>

          <Link to="/login" className="container-flex-center text-color mt-3">
            Already have an account
            <i className="right-arrow-icon bx bx-chevron-right"></i>
          </Link>
        </form>
      </main>
    </>
  );
};
