import React from "react";
import { useState } from "react";

const LicznikTrzy = () => {
  const [licznik, setLicznik] = useState(0);
  return (
    <>
      <h1>Licznik3: {licznik}</h1>
      <br />
      <button onClick={() => setLicznik(licznik + 3)}> l1: +3 </button>
      <button onClick={() => setLicznik(licznik - 3)}> l1: -3 </button>
      <br />
    </>
  );
};

export default LicznikTrzy;
