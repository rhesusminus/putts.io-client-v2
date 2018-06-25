import React from 'react'
import { Toolbar, ToolbarButton } from 'react-onsenui'
import { Icon } from './'
import '../styles/AppToolbar.css'

const AppToolbar = ({ type, openMenu }) => {
  return (
    <Toolbar>
      <div className="left">
        {type === 'game' ? (
          <Icon icon="arrow-round-back" />
        ) : (
          <img src={`http://placekitten.com/g/35/35`} alt="avatar" />
        )}
      </div>
      <div className="center">displayName</div>
      <div className="right">
        <ion-icon name="menu" size="small" onClick={openMenu} />
      </div>
    </Toolbar>
  )
}

export default AppToolbar
