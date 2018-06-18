import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { GameList, GameDetails, Profile, Game1 } from '../'

const DashboardLayout = () => (
  <Switch>
    <Route path="/dashboard" exact component={GameList} />
    <Route path="/dashboard/game/:id" exact component={GameDetails} />
    <Route path="/dashboard/game/1/play" component={Game1} />
    <Route path="/dashboard/profile" exact component={Profile} />
    <Redirect to="/dashboard" />
  </Switch>
)

export default DashboardLayout
