import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import Login from './components/Login'

class App extends React.Component {
  
  state = {
    currentUser: ""
  }

  render(){
    return(
      <>
        <Route exact path="/" render={() => (<HomePage />)} />
        <Route exact path="/signup" render={() => (<SignUp />)} />
        <Route exact path="/login" render={() => (<Login />)} />
      </>
    )
  }
}

export default App;
