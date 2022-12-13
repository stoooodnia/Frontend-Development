import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Company Website</h1>
      <nav>
        <Link to="about">About </Link>
        <Link to="events">Events</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export const About = () => {
  return <div>about</div>;
};

export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Outlet />
    </div>
  );
};

export const Events = () => {
  return <div>events</div>;
};

export const Products = () => {
  return <div>products</div>;
};

export const Whoops404 = () => {
  let location = useLocation();
  console.log(location);

  return <div>Nie znaleziono elementu: {location.pathname}</div>;
};

export const Us = () => {
  return <div>us</div>;
};

export const Pl = () => {
  return <div>pl</div>;
};
export const De = () => {
  return <div>de</div>;
};
