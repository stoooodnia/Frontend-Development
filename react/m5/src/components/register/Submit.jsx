import React from "react";
import { RContext } from "./Context";
import accounts from "../../data/accounts.json";
import { useEffect } from "react";

const Submit = () => {
  const register = RContext();

  //   const validate = () => {
  //     if (
  //       register.fn !== "" &&
  //       register.ln !== "" &&
  //       String(register.email)
  //         .toLowerCase()
  //         .match(
  //           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //         )
  //     ) {
  //       true;
  //     }
  //   };
  const handleSubmit = () => {};

  return <input id="submit" type="submit" value="submit" />;
};

export default Submit;
