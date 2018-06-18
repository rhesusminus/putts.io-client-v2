import { types } from 'mobx-state-tree'
import GamesStore from './games-store'
import UserStore from './user-store'
import { RouterModel } from 'mst-react-router'

const stores = types.model('StoreModel', {
  router: RouterModel,
  games: types.optional(GamesStore, {}),
  user: types.optional(UserStore, {})
})

export { stores }
