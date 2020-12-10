import React from "react";
import '../Login.css'

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
          <p>
            Dont have an account? <a href="signup">Sign up here</a>
          </p>
          {/* i believe this anchor causes the page to refresh....use routes instead */}
        </fieldset>
      </>
    );
  }
}

export default Login;
