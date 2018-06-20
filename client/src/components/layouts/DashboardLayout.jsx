import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { GameList, GameDetails, Profile, Game1, DashboardToolbar } from '../'
import { Page, Splitter, SplitterSide, List, ListItem, SplitterContent } from 'react-onsenui'

class DashboardLayout extends React.Component {
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
          <Page renderToolbar={() => <DashboardToolbar openMenu={this.openMenu} />}>
            <Route path="/dashboard" exact component={GameList} />
            <Route path="/dashboard/game/:id" exact component={GameDetails} />
            <Route path="/dashboard/game/1/play" component={Game1} />
            <Route path="/dashboard/profile" exact component={Profile} />
          </Page>
        </SplitterContent>
      </Splitter>
    )
  }
}

export default withRouter(inject('store')(observer(DashboardLayout)))
