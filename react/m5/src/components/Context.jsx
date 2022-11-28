import React, { useState, useContext, createContext } from "react";

export const D = createContext({
  email: "",
  passwd: "",
});

export const DContext = () => useContext(D);
