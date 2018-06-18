import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Input, Button } from 'react-onsenui'
import '../styles/Signin.css'

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    const { email, password } = this.state
    if (event) {
      event.preventDefault()
    }
    // this.props.loginUser({ email, password })
  }

  onPasswordKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="Signin">
        <Input
          modifier="underbar"
          placeholder="Email"
          value={email}
          type="email"
          name="email"
          onChange={this.handleInputChange}
        />
        <br />
        <Input
          modifier="underbar"
          placeholder="Password"
          value={password}
          type="password"
          name="password"
          onChange={this.handleInputChange}
          onKeyPress={this.onPasswordKeyPress}
        />
        <Button>Login</Button>
        <Button>Register new user</Button>
      </div>
    )
  }
}

export default inject('store')(observer(Signin))
