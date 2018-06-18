import { types, flow, getParent } from 'mobx-state-tree'
import { history } from '../index'

// const API_URI = process.env.REACT_APP_API_URI
const localStorageItem = 'putss.io-token'

const userStore = types
  .model('UserStore', {
    isFetching: false
  })
  .actions(self => ({
    loginUser(email, password) {
      console.log(`email: ${email}, password: ${password}`)
      // secret temporary token for testing purposes
      const token = 'ABC'
      localStorage.setItem(localStorageItem, token)
      history.push('/dashboard')
    },
    logoutUser() {
      localStorage.setItem(localStorageItem, '')
      history.push('/signin')
    }
  }))

export default userStore
