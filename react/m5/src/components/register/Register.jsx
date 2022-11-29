import React, { useState } from "react";
import { R, RContext } from "./Context";
import "./Register.css";
import Submit from "./Submit";
import PasswordStrengthBar from "react-password-strength-bar";

const Register = () => {
  // context
  const dataR = RContext();
  // useState
  const [register, setRegister] = useState(dataR);

  // reset button
  const resetForm = () => {
    document.getElementById("register-form").reset();
  };

  // return
  return (
    <div className="register">
      <R.Provider value={register}>
        <h2>panel rejestracji</h2>
        <form id="register-form">
          <input
            type="text"
            name="fn"
            id="fn"
            placeholder="imie"
            required
            onChange={(e) => {
              setRegister({
                fn: e.target.value,
                ln: register.ln,
                email: register.email,
                passwd: register.passwd,
              });
            }}
          />
          <input
            type="text"
            name="ln"
            id="ln"
            placeholder="nazwisko"
            required
            onChange={(e) => {
              setRegister({
                fn: register.fn,
                ln: e.target.value,
                email: register.email,
                passwd: register.passwd,
              });
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={(e) => {
              setRegister({
                fn: register.fn,
                ln: register.ln,
                email: e.target.value,
                passwd: register.passwd,
              });
            }}
          />
          <input
            type="password"
            name="passdw"
            id="passdw"
            placeholder="hasło"
            onChange={(e) => {
              setRegister({
                fn: register.fn,
                ln: register.ln,
                email: register.email,
                passwd: e.target.value,
              });
            }}
          />
          <PasswordStrengthBar password={register.passwd} />
          <label htmlFor="dateOfBirth"> data urodzenia </label>
          <input type="date" name="dateOfBirth" id="dateOfBirth" />
          <label htmlFor="photo"> zdjęcie</label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/png, image/jpg"
          />
          <div className="checkbox">
            <input type="checkbox" name="one" id="one" />
            <label htmlFor="one"> wuf wuf</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="two" id="two" />
            <label htmlFor="two"> miau miau </label>
          </div>
          <Submit />
          <button type="reset" onClick={() => resetForm()}>
            reset
          </button>
        </form>
      </R.Provider>
    </div>
  );
};

export default Register;
