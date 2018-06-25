import React from 'react'
import ons from 'onsenui'
import { iosArrowRoundBack, mdArrowRoundBack, iosMenu, mdMenu } from '../static/svg'

const icons = {
  'arrow-round-back': {
    ios: iosArrowRoundBack,
    md: mdArrowRoundBack
  },
  menu: {
    ios: iosMenu,
    md: mdMenu
  }
}

export default class Icon extends React.PureComponent {
  render() {
    const { icon, onClick } = this.props
    const platform = ons.platform.isIOS() ? 'ios' : 'md'

    return <ion-icon src={icons[icon][platform]} size="small" onClick={onClick} />
  }
}
