import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import DataPrint from "./DataPrint";
import "./RegisterForm.css";

// Pole tekstowe name
// Pole z adresem email
// Pole typu password
// Wybór, pokazany za pomocą znacznika radiobutton
// Pierwsze obywatelstwo
// Checkbox, sprawdzający zgodę na rejestracje w serwisie
// Przycisk resetuj
// Przycisk submit

export default function RegisterForm() {
  const validate = (values) => {
    const errors = {};
    return errors;
  };
  const [data, setData] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    localStorage.setItem(i.toString(), JSON.stringify(data));
    setI(i + 1);
  }, [data]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      passwd: "",
      radiobtn: "",
      cp: "",
      checkbox: false,
    },
    validate,
    onSubmit: (values) => {
      setData(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="passwd">Password</label>
        <input
          id="passwd"
          name="passwd"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwd}
        />
        {formik.touched.passwd && formik.errors.passwd ? (
          <div>{formik.errors.passwd}</div>
        ) : null}
        <label htmlFor="radiobtn">Radiobtn</label>
        <input
          id="radiobtn"
          name="radiobtn"
          type="radio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value="radiobtn"
        />
        {formik.touched.radiobtn && formik.errors.radiobtn ? (
          <div>{formik.errors.radiobtn}</div>
        ) : null}
        <label htmlFor="cp">citizenship</label>
        <input
          id="cp"
          name="cp"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cp}
        />
        {formik.touched.cp && formik.errors.cp ? (
          <div>{formik.errors.cp}</div>
        ) : null}
        <label htmlFor="checkbox">checkbox</label>
        <input
          id="checkbox"
          name="checkbox"
          type="checkbox"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.checkbox}
        />
        {formik.touched.checkbox && formik.errors.checkbox ? (
          <div>{formik.errors.checkbox}</div>
        ) : null}

        <button type="reset" onClick={() => formik.resetForm()}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
      <DataPrint data={data} />
    </div>
  );
}
