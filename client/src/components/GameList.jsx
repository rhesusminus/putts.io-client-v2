import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import { List, ListItem, ListHeader } from 'react-onsenui'

class GameList extends Component {
  push = this.props.store.router.push
  games = this.props.store.games

  componentDidMount() {
    this.games.fetchGames()
  }

  handleGameSelection = id => {
    this.push(`/dashboard/game/${id}`)
  }

  renderRow = game => {
    const x = 40 + Math.round(5 * (Math.random() - 0.5))
    const y = 40 + Math.round(5 * (Math.random() - 0.5))

    return (
      <ListItem key={game.id} onClick={() => this.handleGameSelection(game.id)}>
        <div className="left">
          <img src={`http://placekitten.com/g/${x}/${y}`} alt="game" style={{ borderRadius: '4px' }} />
        </div>
        <div className="center">{game.name}</div>
      </ListItem>
    )
  }

  render() {
    const gameList = getSnapshot(this.props.store.list)

    return (
      <List
        dataSource={gameList}
        renderRow={this.renderRow}
        renderHeader={() => <ListHeader>Available games</ListHeader>}
      />
    )
  }
}

export default inject('store')(observer(GameList))
