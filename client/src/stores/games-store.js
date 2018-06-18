/* globals window */
import { types, flow, getParent } from 'mobx-state-tree'
import axios from 'axios'

const API_URI = process.env.REACT_APP_API_URI

const gamesStore = types
  .model('GamesStore', {
    isFetching: false
  })
  .actions(self => ({
    fetchGame: flow(function*(gameId) {
      self.isFetching = true
      const game = yield axios.get(`${API_URI}/games/${gameId}`)
      self.isFetching = false
      getParent(self).setSelectedGame(game.data)
    }),
    fetchGames: flow(function*() {
      self.isFetching = true
      const response = yield window.fetch(`${API_URI}/games`)
      const games = yield response.json()
      getParent(self).setGameList(games)
      self.isFetching = false
    })
  }))

export default gamesStore
