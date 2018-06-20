import React from 'react'
import { ResultInput, ResultDisplay } from './'
import '../styles/Game1.css'

const Game1 = () => {
  return (
    <div className="Game1">
      <ResultDisplay />
      <div className="Game1__resultInput">
        <ResultInput />
      </div>
    </div>
  )
}

export default Game1
