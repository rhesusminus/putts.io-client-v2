import React from 'react'
import { render } from 'react-dom'
import { types } from 'mobx-state-tree'
import { Provider } from 'mobx-react'
import { Router } from 'react-router-dom'
import makeInspectable from 'mobx-devtools-mst'
import { createBrowserHistory } from 'history'
import { RouterModel, syncHistoryWithStore } from 'mst-react-router'
import { stores } from './stores/stores'
import { App } from './components'
import { GamesModel, Game } from './models'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import './styles/index.css'

const routerModel = RouterModel.create()

const initialState = {
  router: routerModel,
  list: [],
  selectedGame: Game.create()
}

const rootStore = types
  .compose(
    GamesModel,
    stores
  )
  .named('RootStore')
  .create(initialState)

export const history = syncHistoryWithStore(createBrowserHistory(), routerModel)

makeInspectable(rootStore)

render(
  <Provider store={rootStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
