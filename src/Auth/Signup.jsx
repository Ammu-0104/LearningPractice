import React, { useState } from "react";
import "./RegisterPage.css";
import { account } from "./AppWrite";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      register();
    }
  };

  const register = async () => {
    try {
      var x = await account.create("unique()", email, password, name);
      console.log(x);
    } catch (e) {
      console.log(e);
    }
  };
 
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="register-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
