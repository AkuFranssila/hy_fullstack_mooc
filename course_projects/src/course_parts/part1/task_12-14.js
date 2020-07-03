import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function getRandomIntBetweenZeroandSelectedNumber(max) {
    max = Math.floor(max);
    return (
        Math.floor(Math.random() * (max + 1))//The maximum is inclusive and the minimum is inclusive
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const DisplayAnecdote = ({ anecdote }) => (
    <p>
        { anecdote }
    </p>
)

const DisplayVotes = ({ points, index }) => (
    <p>
        has { points[index] } votes
    </p>
)

const DisplayAnecdoteMostVotes = ({ points, anecdotes}) => {
    console.log(points)
    console.log(anecdotes)
    const pointsKeys = Object.keys(points)
    const pointsKeysInt = pointsKeys.map((pointsKeys) => parseInt(pointsKeys, 10));
    console.log(pointsKeysInt)
    let mostVotes = 0;
    let mostVotesIndex = 0;
    for (const [index, value] of pointsKeysInt.entries()) {
      const voteCount = points[value]
      if (voteCount > mostVotes) {
        mostVotes = voteCount
        mostVotesIndex = index
      }
    }

    console.log(mostVotes)
    console.log(mostVotesIndex)
    return (
        <p>
            { anecdotes[mostVotesIndex] }
        </p>
    )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
      {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
      }
  )

  const handleSelected = () => {
    const arrayLength = anecdotes.length -1
    const randomIntForArray = getRandomIntBetweenZeroandSelectedNumber(arrayLength)
    setSelected(randomIntForArray)
  }

  const handlePoints = () => {
    const copyPoints = { ...points }
    copyPoints[selected] += 1
    setPoints(copyPoints)
  }

  return (
    <div>
      <h1>
          Anecdote of the day
      </h1>
      <DisplayAnecdote anecdote={ anecdotes[selected] } />
      <DisplayVotes points={points} index={selected} />
      <Button onClick={handlePoints} text="Vote" />
      <Button onClick={handleSelected} text="Next anecdote" />
      <h1>
          Anecdote with most votes
      </h1>
      <DisplayAnecdoteMostVotes points={points} anecdotes={anecdotes} />
    </div>
  )
}

export const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export default App;