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
                //the key in this object must match the the backend params, and the attributes of the model
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
                <fieldset onSubmit={this.handleSubmit} >
                    {/* fieldset tag groups field controls together and has line around them to show they are grouped*/}
                    {/* form controls are tags used to gather user input */}
                    {/* fieldset lines can be changed with CSS */}
                    <legend>Sign Up!</legend>
                    {/* legend tag is used as caption of the purpose of the group form controls */}
                    <label for="firstname">First Name: <input id="firstname" type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required/> </label>
                    {/* label tags are being used for the vision impaired user */}
                    {/* the for attribute use the id attribute value of the form control it is labeling*/}
                    <br />
                    {/* elements with no words between open and closing tags are empty elements*/}
                    <label for="lastname">Last Name: <input id="lastname" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} required/> </label>
                    <br />
                    <label for="username">Username: <input id="username" type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.handleChange} required/> </label>
                    {/* <input name="email" placeholder="email" /> */}
                    <br />
                    <label for="password">Password: <input id="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/></label>
                    {/* type attribute set to password hides the input in the password field when the user types */}
                    {/* ...this does not make the password secure when the form is submit */}
                    <br />
                    <button> Create Account </button>
                    {/* button does not need type attribut to be set to submit */}
                </fieldset>
                <div>
                    Already have an account? Login
                </div>

            </>
        )
    }
}

export default SignUp