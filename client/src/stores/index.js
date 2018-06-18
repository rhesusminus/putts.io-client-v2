import { types } from 'mobx-state-tree'
import { createBrowserHistory } from 'history'
import makeInspectable from 'mobx-devtools-mst'
import { RouterModel, syncHistoryWithStore } from 'mst-react-router'
import { GamesModel } from '../models'

const routerModel = RouterModel.create()
const gamesModel = GamesModel.create()
const history = syncHistoryWithStore(createBrowserHistory(), routerModel)

const StoreModel = types.model('StoreModel', {
  router: RouterModel,
  games: GamesModel
})

const store = StoreModel.create({
  router: routerModel,
  games: gamesModel
})

makeInspectable(store)

export { store, history }
