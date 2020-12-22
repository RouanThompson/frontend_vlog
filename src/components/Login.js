import React from "react";
import '../index.css'

class Login extends React.Component {
  render() {
    return (
      <>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="username">
            Username:{" "}
            <input id="username" name="username" placeholder="User Name" />
          </label>
          <br />
          <label htmlFor="password">
            Password:{" "}
            <input id="password" name="password" placeholder="Password" />
          </label>
          <br />
          <button> Login </button>
          {/* i believe this anchor causes the page to refresh....use routes instead */}
        </fieldset>
        <p>
            Dont have an account? <a href="signup">Sign up here</a>
        </p>
      </>
    );
  }
}

export default Login;
