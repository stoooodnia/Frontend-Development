import React, { useEffect, useState } from "react";

const Kordy = () => {
  const [kordy, setKordy] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener(
      "mousemove",
      (event) => {
        setKordy({ x: event.clientX, y: event.clientY });
      },
      []
    );
  }, []);

  return (
    <div className="kordy">
      <h2> koordynaty myszki na ekranie </h2>
      <p> x: {kordy.x}</p>
      <p> y: {kordy.y}</p>
    </div>
  );
};

export default Kordy;
