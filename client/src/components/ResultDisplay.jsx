import React from 'react'
import '../styles/ResultDisplay.css'

const Input = ({ input }) => <div className="ResultDisplay__main">{input}</div>
const Distance = ({ distance }) => <div className="ResultDisplay__helper-distance">{distance}</div>
const Result = ({ result }) => <div className="ResultDisplay__helper-result">{result}</div>

const ResultDisplay = ({ input, handleClick }) => {
  return (
    <div className="ResultDisplay">
      <Input input={input} />
      <div className="ResultDisplay__helper">
        <Distance distance="10 m" />
        <Result result="4/20" />
      </div>
    </div>
  )
}

export default ResultDisplay
