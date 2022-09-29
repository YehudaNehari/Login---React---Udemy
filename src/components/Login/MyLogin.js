import React, { useState } from "react";
import { loginApi } from "../Utils/userinfoapi";

const MyLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      await loginApi({ username, password });
      setIsLogged(true);
    } catch (error) {
      setError("Incorrect username or password!");
    }
  }

  function handleUername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmit}>
        <label>UserName</label>
        <input onChange={handleUername} type="text" />
        <label>Password</label>
        <input onChange={handlePassword} type="password" />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default MyLogin;
