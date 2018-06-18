import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route, withRouter } from 'react-router-dom'
import {
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  Splitter,
  SplitterSide,
  SplitterContent,
  List,
  ListItem
} from 'react-onsenui'
import DashboardLayout from './layouts/DashboardLayout'
import { Register, Signin } from './'

class App extends Component {
  push = this.props.store.router.push
  state = {
    menuIsOpen: false
  }

  navMenuData = [
    {
      id: 1,
      title: 'Games',
      url: '/dashboard'
    },
    {
      id: 2,
      title: 'Profile',
      url: '/dashboard/profile'
    },
    {
      id: 3,
      title: 'Logout',
      url: '/signout'
    }
  ]

  openMenu = () => this.setState({ menuIsOpen: true })
  closeMenu = () => this.setState({ menuIsOpen: false })

  renderToolbar = () => (
    <Toolbar>
      <div className="left">user.image.small</div>
      <div className="center">user.displayName</div>
      <div className="right">
        <ToolbarButton>
          <Icon icon="ion-navicon, material:md-menu" onClick={this.openMenu} />
        </ToolbarButton>
      </div>
    </Toolbar>
  )

  handleMenuItemClick = url => {
    this.closeMenu()
    this.push(url)
  }

  render() {
    const { menuIsOpen } = this.state

    return (
      <Splitter>
        <SplitterSide
          side="right"
          width={200}
          collapse={true}
          swipeable={true}
          isOpen={menuIsOpen}
          onClose={this.closeMenu}
          onOpen={this.openMenu}
        >
          <Page>
            <List
              dataSource={this.navMenuData}
              renderRow={({ id, title, url }) => (
                <ListItem key={id} onClick={() => this.handleMenuItemClick(url)} tappable>
                  {title}
                </ListItem>
              )}
            />
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
            <Route path="/dashboard" component={DashboardLayout} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={Signin} />
          </Page>
        </SplitterContent>
      </Splitter>
    )
  }
}

export default withRouter(inject('store')(observer(App)))
