import React from 'react'
import { Button } from 'react-onsenui'
import '../styles/ResultInput.css'

const ResultInput = () => {
  return (
    <div className="ResultInput">
      <Button>0</Button>
      <Button modifier="outline">1</Button>
      <Button modifier="material--flat">2</Button>
      <Button modifier="material">3</Button>
      <Button modifier="light">4</Button>
      <Button modifier="outline">5</Button>
    </div>
  )
}

export default ResultInput
