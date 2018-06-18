import { types } from 'mobx-state-tree'

const Game = types.model('Game', {
  id: types.optional(types.number, 0),
  name: '',
  shortDesc: '',
  longDesc: '',
  image: ''
})

export default Game
