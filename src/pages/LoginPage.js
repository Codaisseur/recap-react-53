import React from "react";
import { useState } from "react";
import axios from "axios";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault(); // Stops the form from refreshing the page
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      });
      console.log(response);

      const { name, email: userEmail, token } = response.data;

      props.setProfile({ name, email: userEmail, token });
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log("what are props??", props);

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <p>Please enter your details</p>
        <label>Email Address:</label>
        <input
          type='email'
          placeholder='Email'
          onChange={onChangeEmail}
          value={email}
        />
        <br />
        <label>Password:</label>
        <input
          type='password'
          placeholder='Password'
          onChange={onChangePassword}
          value={password}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
