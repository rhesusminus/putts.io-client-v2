import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { GameList, GameDetails, Profile } from '../'

const DashboardLayout = () => (
  <React.Fragment>
    <Switch>
      <Route path="/dashboard" exact component={GameList} />
      <Route path="/dashboard/game/:id" exact component={GameDetails} />
      <Route path="/dashboard/profile" exact component={Profile} />
      <Redirect to="/dashboard" />
    </Switch>
  </React.Fragment>
)

export default DashboardLayout
