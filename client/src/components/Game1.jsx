import React from 'react'
import { ResultInput, ResultDisplay } from './'
import '../styles/Game1.css'

class Game1 extends React.Component {
  state = {
    distance: '10 m',
    result: '4/20',
    input: ''
  }

  handleClick = event => this.setState({ input: event.target.innerHTML })

  render() {
    return (
      <div className="Game1">
        <div className="Game1__resultDisplay">
          <ResultDisplay {...this.state} />
        </div>
        <div className="Game1__resultInput">
          <ResultInput handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default Game1
