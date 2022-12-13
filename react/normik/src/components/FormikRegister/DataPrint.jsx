import React from "react";
import "./DataPrint.css";

const DataPrint = ({ data }) => {
  return (
    <div id="data">
      <p>name: {data.name}</p>
      <p>email: {data.email}</p>
      <p>passwd: {data.passwd}</p>
      <p>radiobtn: {data.radiobtn.toString()}</p>
      <p>citizenship: {data.cp}</p>
      <p>checkbox: {data.checkbox.toString()}</p>
    </div>
  );
};

export default DataPrint;
