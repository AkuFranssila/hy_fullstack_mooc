import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const Stat = ({ name, count }) => {
  return (
    <p>{name} {count}</p>
  )
}


const CreateStatistics = (props) => {
  const allVotes = props.good + props.neutral + props.bad
  const avgScore = (props.good - props.bad) / allVotes
  const goodPercentage = props.good / allVotes * 100
  if (allVotes === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <Stat name={"Good:"} count={props.good} />
      <Stat name={"Neutral:"} count={props.neutral} />
      <Stat name={"Bad:"} count={props.bad} />
      <Stat name={"All:"} count={allVotes} />
      <Stat name={"Average:"} count={avgScore} />
      <Stat name={"Positive:"} count={goodPercentage} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>Feedback</h1>
        <Button onClick={handleGood} text="good" />
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" />
      <h1>Statistics</h1>
        <CreateStatistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
