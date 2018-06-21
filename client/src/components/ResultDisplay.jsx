import React from 'react'
import '../styles/ResultDisplay.css'

const Input = ({ input }) => <div className="ResultDisplay__main">{input}</div>
const Distance = ({ distance }) => <div className="ResultDisplay__helper-distance">{distance}</div>
const Result = ({ result }) => <div className="ResultDisplay__helper-result">{result}</div>

const ResultDisplay = ({ input, result, distance }) => {
  return (
    <div className="ResultDisplay">
      <Input input={input} />
      <div className="ResultDisplay__helper">
        <Distance distance={distance} />
        <Result result={result} />
      </div>
    </div>
  )
}

export default ResultDisplay
