import React from 'react'
import { Button, Row } from 'react-onsenui'
import '../styles/ResultInput.css'

const ResultInput = () => {
  return (
    <div className="ResultInput">
      <Row width="100%">
        <Button modifier="outline">0</Button>
        <Button modifier="outline">1</Button>
      </Row>
      <Row>
        <Button modifier="outline">2</Button>
        <Button modifier="outline">3</Button>
      </Row>
      <Row>
        <Button modifier="outline">4</Button>
        <Button modifier="outline">5</Button>
      </Row>
    </div>
  )
}

export default ResultInput
