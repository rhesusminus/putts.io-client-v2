import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import { Signin, Register, DashboardLayout } from './'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signin" component={Signin} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={DashboardLayout} />
    </Switch>
  )
}

export default withRouter(App)
