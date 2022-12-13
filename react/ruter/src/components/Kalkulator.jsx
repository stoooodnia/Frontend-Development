import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const getParams = (params) => {
  const x = params.get("x");
  const y = params.get("y");

  console.log(x, y);
  return { x, y };
};

export const Kalkulator = () => {
  return (
    <div>
      <h1>Calculator</h1>
      <nav>
        <Link to="add">Add </Link>
        <Link to="sub">Substract </Link>
        <Link to="mul">Multiply </Link>
        <Link to="div">Divide </Link>
      </nav>
    </div>
  );
};

export const Add = () => {
  const [searchParams] = useSearchParams();
  const { x, y } = getParams(searchParams);
  return <h1>{parseInt(x) + parseInt(y)}</h1>;
};

export const Sub = () => {
  const [searchParams] = useSearchParams();
  const { x, y } = getParams(searchParams);
  return <h1>{parseInt(x) - parseInt(y)}</h1>;
};

export const Mul = () => {
  const [searchParams] = useSearchParams();
  const { x, y } = getParams(searchParams);
  return <h1>{parseInt(x) * parseInt(y)}</h1>;
};

export const Div = () => {
  const [searchParams] = useSearchParams();
  const { x, y } = getParams(searchParams);
  return <h1>{parseInt(x) / parseInt(y)}</h1>;
};
