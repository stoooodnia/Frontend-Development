import React from "react";
import { useState } from "react";
import PrzyciskBinarny from "./PrzyciskBinarny";
import { ReactDOM } from "react";

const ElementList = ({ id, lista }) => {
  const [liczba, setLiczba] = useState(Math.floor(Math.random() * 100));

  return (
    <li key={id}>
      <div> {liczba} </div>
      <PrzyciskBinarny liczba={liczba} setLiczba={setLiczba} />
      <button
        onClick={() =>
          ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode)
        }
      >
        {" "}
        Usuń{" "}
      </button>
    </li>
  );
};

export default ElementList;
