import React from "react";
import { useState } from "react";

const LicznikJeden = () => {
  const [licznik, setLicznik] = useState(0);
  return (
    <div>
      <h1>Licznik1: {licznik}</h1>
      <br />
      <button onClick={() => setLicznik(licznik + 1)}> l1: +1 </button>
      <button onClick={() => setLicznik(licznik - 1)}> l1: -1 </button>
      <br />
      <br />
    </div>
  );
};

export default LicznikJeden;
