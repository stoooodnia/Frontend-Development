import React, { useState, useContext, createContext } from "react";
import { SignIn } from "./SignIn";
import { DContext } from "./Context";
import account from "../data/accounts.json"

const Submit = () => {
  const input = DContext();

  return <button type="submit"> log in </button>;
};

export default Submit;

const Clicked = (e) => {
    e.preventDefault();
    const validEmail = new RegExp(^${data.email}$);
    const validPassword = new RegExp(^${data.password}$);
    if (validEmail.test(email) & validPassword.test(password)) setProper(true);
  };