import { types } from 'mobx-state-tree'
import Game from './game'

const model = types
  .model('GamesModel', {
    list: types.optional(types.array(Game), []),
    selectedGame: types.optional(Game, {})
  })
  .actions(self => ({
    setGameList(list) {
      self.list = list
    },
    setSelectedGame(game) {
      self.selectedGame = game
    }
  }))

export default model
