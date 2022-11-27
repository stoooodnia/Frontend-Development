import React, { useState, useContext, useEffect } from "react";

const Form = () => {
  function addProduct() {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        image: document.getElementById("image").value,
        category: document.getElementById("category").value,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return (
    <form>
      <label for="fname">Title:</label>
      <br />
      <input type="text" id="title" name="title" />
      <br />
      <label for="price">Price:</label>
      <br />
      <input type="number" id="price" name="price" />
      <br />
      <label for="description">Description:</label>
      <br />
      <input type="text" id="description" name="description" />
      <br />
      <label for="image">Image(link):</label>
      <br />
      <input type="text" id="image" name="image" />
      <br />
      <label for="category">Price:</label>
      <br />
      <input type="text" id="category" name="category" />
    </form>
  );
};

export default Form;
