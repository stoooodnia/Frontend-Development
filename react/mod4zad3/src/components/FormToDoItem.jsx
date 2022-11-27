import React from "react";

const FormToDoItems = ({ handleToDoChange }) => {
  return (
    <>
      <input
        id="todo"
        type="text"
        placeholder="treść TODO"
        onChange={handleToDoChange}
      />
    </>
  );
};

export default FormToDoItems;
