import React from "react"

class Login extends React.Component {

    render(){
        return(
            <form>
                <h1>Login</h1>
                <input name="username" placeholder="User Name" />
                <input name="password" placeholder="Password" />
                <button> Login </button>
            </form>
        )
    }
}

export default Login