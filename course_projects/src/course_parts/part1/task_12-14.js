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

const Display = ({ anecdote }) => (
    <p>
        { anecdote }
    </p>
)

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)

  const handleSelected = () => {
    const arrayLength = anecdotes.length -1
    const randomIntForArray = getRandomIntBetweenZeroandSelectedNumber(arrayLength)
    setSelected(randomIntForArray)
  }

  return (
    <div>
      <Display anecdote={ anecdotes[selected] } />
      <Button onClick={handleSelected} text="Next anecdote" />
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