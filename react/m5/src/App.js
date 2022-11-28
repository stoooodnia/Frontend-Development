import React, { useState, useContext, createContext } from "react";
import accounts from "./data/accounts.json";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <SignIn />
    </div>
  );
}

export default App;
