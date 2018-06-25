import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import { Button } from 'react-onsenui'
import '../styles/GameDetails.css'

class GameDetails extends Component {
  store = this.props.store
  push = this.store.router.push

  componentDidMount() {
    this.store.games.fetchGame(this.props.match.params.id)
  }

  render() {
    const { longDesc, name } = getSnapshot(this.store.selectedGame)
    return (
      <div className="GameDetails">
        <div className="GameDetails__header">
          <h1>{name.toUpperCase()}</h1>
        </div>
        <div className="GameDetails__desc">
          {longDesc}
          <Button modifier="large" onClick={() => this.push('/dashboard/game/1/play')}>
            START GAME
          </Button>
        </div>
      </div>
    )
  }
}

export default inject('store')(observer(GameDetails))
