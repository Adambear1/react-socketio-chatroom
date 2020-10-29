import React, { useRef } from "react";

function Login({ setUsername }) {
  const nameRef = useRef();
  const login = (e) => {
    e.preventDefault();
    setUsername(nameRef.current.value);
  };
  return (
    <div id="login">
      <form onSubmit={login}>
        <label>Username:</label>
        <br />
        <input type="text" id="username" ref={nameRef} />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
