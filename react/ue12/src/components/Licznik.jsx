import React from "react";
import { useState, useEffect } from "react";
import ElementList from "./ElementList";

const Random = () => {
  const [lista, setLista] = useState([...Array(10)]);
  console.log(lista);

  function filterList(id) {
    setLista((prevLista) => prevLista.filter((element) => +element.key !== id));
  }
  useEffect(() => {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    window.addEventListener("mouseup", (e) => {
      if (e.button === 2) {
        setLista(
          lista.map((e, i) => (
            <ElementList key={i} id={i} lista={lista} usun={filterList} />
          ))
        );
      }
    });
  });
  return (
    <>
      {/* <button
        onClick={() =>
          setLista(
            lista.map((e, i) => (
              <ElementList key={i} id={i} lista={lista} usun={filterList} />
            ))
          )
        }
      >
        Generuj Liczby
      </button> */}
      <h1>Generator liczb</h1>
      <h3>wciśnij prawy przycisk :)</h3>
      <br />
      <ul>
        {" "}
        {console.log(lista)} {lista}{" "}
      </ul>
    </>
  );
};

export default Random;
