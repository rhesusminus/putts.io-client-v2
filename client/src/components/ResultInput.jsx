import React from 'react'
import { Button } from 'react-onsenui'
import '../styles/ResultInput.css'

const ResultInput = ({ handleClick }) => {
  return (
    <div className="ResultInput">
      <Button onClick={handleClick}>0</Button>
      <Button modifier="outline" onClick={handleClick}>
        1
      </Button>
      <Button modifier="material--flat" onClick={handleClick}>
        2
      </Button>
      <Button modifier="material" onClick={handleClick}>
        3
      </Button>
      <Button modifier="light" onClick={handleClick}>
        4
      </Button>
      <Button modifier="outline" onClick={handleClick}>
        5
      </Button>
    </div>
  )
}

export default ResultInput
