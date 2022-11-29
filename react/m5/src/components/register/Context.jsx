import { useContext, createContext } from "react";

export const R = createContext({
  fn: "",
  ln: "",
  email: "",
  passwd: "",
});

export const RContext = () => useContext(R);
