import React from 'react'
import { ResultInput, ResultDisplay } from './'
import '../styles/Game1.css'

class Game1 extends React.Component {
  state = {
    distance: null,
    result: '',
    input: ''
  }

  handleClick = event => this.setState({ input: event.target.innerHTML })

  render() {
    const { distance, result, input } = this.state

    return (
      <div className="Game1">
        <div className="Game1__resultDisplay">
          <ResultDisplay input={input} />
        </div>
        <div className="Game1__resultInput">
          <ResultInput handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default Game1
