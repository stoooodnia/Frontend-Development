import React from "react";

const FormToDoData = ({ handleToDoDataChange }) => {
  return (
    <>
      <input
        id="data"
        type="text"
        placeholder="do kiedy (mm.dd.rr)"
        onChange={handleToDoDataChange}
      />
    </>
  );
};

export default FormToDoData;
