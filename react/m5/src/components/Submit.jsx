import React from "react";
import { DContext } from "./Context";
import accounts from "../data/accounts.json";

const Submit = () => {
  const input = DContext();

  const handleSubmit = () => {
    if (
      String(input.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      const findAcc = accounts.find((x) => x.email === input.email);
      if (findAcc === undefined) {
        alert("nie znaleziono konta o danym email'u");
      } else {
        if (findAcc.passwd === input.passwd) {
          alert("zalogowano");
        } else {
          alert("podano błędne hasło");
        }
      }
    } else {
      alert("źle podano email");
    }
  };

  return (
    <button type="submit" onClick={() => handleSubmit()}>
      {" "}
      log in{" "}
    </button>
  );
};

export default Submit;

// const Clicked = (e) => {
//     e.preventDefault();
//     const validEmail = new RegExp(^${data.email}$);
//     const validPassword = new RegExp(^${data.password}$);
//     if (validEmail.test(email) & validPassword.test(password)) setProper(true);
//   };
