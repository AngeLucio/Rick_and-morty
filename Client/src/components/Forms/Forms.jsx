import React, { useState } from "react";
import { validation } from "./validation";
import "./Forms.css";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(validation({ ...userData, [name]: value }));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <img
          src="https://media.giphy.com/media/jsN192JGdyWvS1gqTb/giphy.gif"
          className="image"
        ></img>
        <hr></hr>
        <label className="nameInput">Email</label>
        <input
          className="input"
          name="email"
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        ></input>
        {errors.email && <p className="errors">{errors.email}</p>}
        <hr />
        <label className="nameInput">Password</label>
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Ingresa tu password"
          value={userData.password}
          onChange={handleChange}
        ></input>
        {errors.password && <p className="errors">{errors.password}</p>}
        <hr /> 
        <button className="submit" type="submit">
         <b> Ingresar </b>
        </button>
      </form>
    </div>
  );
};

export default Forms;
