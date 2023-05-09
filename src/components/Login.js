import { useState } from "react";
import Cookies from 'js-cookie'
import "./Login.css";
import { Navigate } from "react-router-dom";

let userData = [
  {
    username: "test",
    password: "test",
  },
];

export default function Login() {
    const token = Cookies.get('token')
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErr, setShowErr] = useState(false);
  function onSubmitLoginForm(event) {
    event.preventDefault();
    if (
      username === userData[0].username &&
      password === userData[0].password
    ) {
      setShowErr(false);
      Cookies.set("token","jnjnjdnjfndjfndjnfj",{expires:7})
      window.location.replace("/");
    } else {
      setShowErr(true);
    }
  }

  if (token){
    return <Navigate to="/"/>
  }
  
  return (
    <div className="login-bg-container">
      <form className="login-form" onSubmit={onSubmitLoginForm}>
        <label htmlFor="username-inp">USERNAME</label>
        <input
          type="text"
          id="username-inp"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password-inp">PASSWORD</label>
        <input
          type="password"
          value={password}
          id="password-inp"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Submit</button>
        <p>{showErr && "Invalid Username or Password"}</p>
      </form>
    </div>
  );
}
