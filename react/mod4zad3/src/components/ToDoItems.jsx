import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDoitems = () => {
  const [toDo, setToDo] = useState([]);

  function addToDoItem(item) {
    setToDo((toDo) => {
      return [...toDo, item];
    });
  }
  return (
    <div>
      <ul>
        {" "}
        {toDo.map((item, index) => (
          <li key={index} className={item}>
            {item}
          </li>
        ))}
      </ul>

      <ToDoForm add={addToDoItem} />
    </div>
  );
};

export default ToDoitems;
