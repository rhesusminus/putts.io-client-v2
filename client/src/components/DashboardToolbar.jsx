import React from 'react'
import { Toolbar, ToolbarButton, Icon } from 'react-onsenui'

const DashboardToolbar = ({ toolbarType, openMenu }) => {
  return (
    <Toolbar>
      <div className="left">user.image.small</div>
      <div className="center">user.displayName</div>
      <div className="right">
        <ToolbarButton>
          <Icon icon="ion-navicon, material:md-menu" onClick={openMenu} />
        </ToolbarButton>
      </div>
    </Toolbar>
  )
}

export default DashboardToolbar
