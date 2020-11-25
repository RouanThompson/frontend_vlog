import React from 'react'

class SignUp extends React.Component{

    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "" 
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        console.log(`name of input: ${name}`)
        console.log(`value of input: ${value}`)

        this.setState({
            [name]: value
        })
        // why use setState?
        // we use to change the state
        // we use it to trigger a render after changing the state
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // prevents page from reloading

        let userInput = {
            user: {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                username: this.state.username,
                password: this.state.password
            }
        }
        // does this need to be snake case? or camel case

        console.log("fetch made")

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInput)
        })
            .then(r => r.json())
            .then(newUser => console.log(newUser))
    }

    render(){

        return(
            <>
                <form onSubmit={this.handleSubmit} >
                    <h1>Sign Up!</h1>
                    <input name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
                    <input name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
                    <input name="username" placeholder="User Name" value={this.state.username} onChange={this.handleChange} />
                    {/* <input name="email" placeholder="email" /> */}
                    <input name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    <button> Create Account </button>
                </form>
                <div>
                    Already have an account? Login
                </div>

            </>
        )
    }
}

export default SignUp