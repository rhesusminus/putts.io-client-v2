import { types } from 'mobx-state-tree'
import User from './user'

const model = types
  .model('UserModel', {
    user: types.optional(User, {}),
    isAuthenticated: false
  })
  .actions(self => ({
    setUser(user) {
      self.user = user
    },
    removeUser() {
      self.user = {}
    },
    setAuthenticated(authState) {
      self.isAuthenticated = authState
    }
  }))
