import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { GameList, GameDetails, Profile } from '../'

const DashboardLayout = () => (
  <React.Fragment>
    <Switch>
      <Route path="/dashboard/game/1/play" exact component={GameDetails} />
      <Redirect to="/dashboard" />
    </Switch>
  </React.Fragment>
)

export default DashboardLayout
