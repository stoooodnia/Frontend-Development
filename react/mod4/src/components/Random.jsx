import React from "react";
import { useState } from "react";
import ElementList from "./ElementList";

const Random = () => {
  const [content, setContent] = useState("");

  const lista = [...Array(10)].map((e, i) => (
    <ElementList key={i} delete={handleDelete} />
  ));
  function handleDelete(id) {
    setContent(content.filter((el) => el.key !== id));
  }

  return (
    <>
      <button onClick={() => setContent(lista)}>Generuj Liczby</button>
      <ul>{content}</ul>
    </>
  );
};

export default Random;
