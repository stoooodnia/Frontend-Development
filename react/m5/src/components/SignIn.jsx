import React, { useState, useContext, createContext } from "react";
import Submit from "./Submit";
import { D } from "./Context";
import { DContext } from "./Context";

const SignIn = () => {
  const Data = DContext();
  const [input, setInput] = useState(Data);

  return (
    <div className="login-form">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={(e) => {
          setInput({
            email: e.target.value,
            passwd: input.passwd,
          });
          console.log(input);
        }}
      />
      <input
        type="password"
        name="passwd"
        id="passwd"
        placeholder="hasło"
        onChange={(e) => {
          setInput({
            email: input.email,
            passwd: e.target.value,
          });
          console.log(input);
        }}
      />
      <D.Provider value={input}>
        <Submit />
      </D.Provider>
    </div>
  );
};

export default SignIn;
