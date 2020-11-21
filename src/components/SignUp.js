import React from 'react'

class SignUp extends React.Component{

    render(){
        return(
            <>
                <form>
                    <h1>Sign Up!</h1>
                    <input name="first name" placeholder="First Name" />
                    <input name="last name" placeholder="Last Name" />
                    <input name="username" placeholder="User Name" />
                    {/* <input name="email" placeholder="email" /> */}
                    <input name="password" placeholder="Password" />
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