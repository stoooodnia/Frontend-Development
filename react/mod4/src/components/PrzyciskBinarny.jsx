import React from "react";
import { useState } from "react";

const PrzyciskBinarny = ({ liczba, setLiczba }) => {
  const [zamiana, setZamiana] = useState(true);

  function handleMoreClick() {
    setZamiana(!zamiana);
  }

  function zamianaNaBinarny() {
    return parseInt(liczba.toString(2));
  }
  function zamianaNaDziesietny() {
    return parseInt(parseInt(liczba), 2);
  }

  return (
    <>
      <button
        onClick={() => {
          handleMoreClick();
          zamiana
            ? setLiczba(zamianaNaBinarny())
            : setLiczba(zamianaNaDziesietny());
        }}
      >
        {zamiana ? "na binarne" : "na dziesiętne"}{" "}
      </button>
    </>
  );
};

export default PrzyciskBinarny;
