import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { GameDetails, Game1, DashboardToolbar } from '../'
import { Page, Splitter, SplitterSide, List, ListItem, SplitterContent } from 'react-onsenui'

class GameLayout extends React.Component {
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
    return (
      <Splitter>
        <SplitterSide
          side="right"
          width={200}
          collapse={true}
          swipeable={true}
          isOpen={this.state.menuIsOpen}
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
            <Route path="/dashboard/game/:id" exact component={GameDetails} />
            <Route path="/dashboard/game/1/play" component={Game1} />
          </Page>
        </SplitterContent>
      </Splitter>
    )
  }
}

export default withRouter(inject('store')(observer(GameLayout)))
