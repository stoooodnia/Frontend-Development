import { waitForElementToBeRemoved } from "@testing-library/react";
import React, { useState } from "react";
import FormToDoData from "./FormToDoData";
import FormToDoItem from "./FormToDoItem";
import FormToDoMessages from "./FormToDoMessages";

const ToDoForm = ({ add }) => {
  const [toDoItem, setToDo] = useState("");
  const [toDoData, setToDoData] = useState("");
  const [mes, setMes] = useState(<FormToDoMessages mes="" />);

  function handleToDoChange(event) {
    setToDo(event.target.value);
  }
  function handleToDoDataChange(event) {
    setToDoData(event.target.value);
  }

  // validateToDo ma sprawdzać czy podane inputy z FormToDoItem i FormToDoData są w porządku,
  // jeżeli jest błąd, to funkcja przekazuje błąd: stringa, do FormToDoMessage
  // funkcja odpala się w przycisku, więc przekazuje "pokaż" wyżej w związku
  // z czym musi dostawać funkcję zmieniającą ToDosy
  function validateToDo() {
    function findErrorCode() {
      const insertedDate = toDoData.split(".").map((el) => parseInt(el));
      const currentDate = new Date()
        .toLocaleDateString()
        .split(".")
        .map((el) => parseInt(el));

      if (toDoItem.length === 0) {
        return "proszę wpisać toDo";
      } else if (toDoData.length === 0) {
        return "proszę wpisać datę";
      }
      // zły dzień ten sam miesiąc rok
      else if (insertedDate[1] <= currentDate[1]) {
        // dalsze sprawdzanie daty, whatever :X
        return "data musi być późniejsza niż dzień dzisiejszy";
      } else {
        return "";
      }
    }
    // logika samej walidacji
    const afterTest = findErrorCode();
    if (afterTest === "") {
      add(`${toDoItem}: ${toDoData}`);
    } else {
      setMes(<FormToDoMessages mes={afterTest} />);
    }
  }
  return (
    <>
      <FormToDoItem handleToDoChange={handleToDoChange} />
      <FormToDoData handleToDoDataChange={handleToDoDataChange} />
      <button
        className="ok"
        onClick={() => {
          validateToDo();
        }}
      >
        {" "}
        OK{" "}
      </button>
      <div className="message">{mes}</div>
    </>
  );
};

export default ToDoForm;
