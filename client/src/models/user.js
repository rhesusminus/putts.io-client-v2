import { types } from 'mobx-state-tree'

const User = types
  .model('User', {
    id: types.optional(types.number, 0),
    name: '',
    displayName: '',
    email: '',
    image: ''
  })
  // .views(self => ({}))
  .actions(self => ({
    edit({ email, image, displayName }) {
      self.email = email
      self.image = image
      self.displayName = displayName
    }
  }))

export default User
