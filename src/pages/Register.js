/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password);
  };

  return (
    <div style={{ flex: 1, flexDirection: "row", margin: 5 }}>
      <div>
        <h3>First Name: </h3>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <h3>Last Name: </h3>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <h3>Email: </h3>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <h3>Password: </h3>
        <input
          id="password"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <button
        style={{ marginTop: 25, width: 100, height: 25 }}
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};
export default Register;
