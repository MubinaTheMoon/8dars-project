import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="form-wrapper">
        <h1 className="title">Login</h1>
        <form className="form" action="">
          <label htmlFor="email">
            <span>Email:</span>
            <input type="email" required placeholder="Type here" />
          </label>
          <label htmlFor="password">
            <span>Password:</span>
            <input type="password" required placeholder="Type here" />
          </label>
          <div className="form-btns">
            <button className="btn login">Login</button>
            <button type="button" className="btn google">
              Google
            </button>
          </div>
        </form>
        <p>
          If you don't have an account, please{" "}
          <Link className="link" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
