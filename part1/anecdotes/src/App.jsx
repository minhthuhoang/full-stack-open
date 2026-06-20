import { useState } from 'react'

const Header = (props) => <div><h1>{props.text}</h1></div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
) 

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const findMax = (array) => {
  let maxPosition = 0
  for (let i = maxPosition + 1; i <= 7; i++) {
    if (array[i] > array[maxPosition]) {
      maxPosition = i
    }
  }
  console.log("most voted has index", maxPosition)
  return maxPosition
}

const Summary = (props) => <div>has {props.value} votes</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const copy = [...votes]

  const handleNext = () => {
    console.log("next anecdote")
    const randomNumber = generateNumber(0, 7)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    console.log("vote clicked")
    copy[selected] += 1 
    setVotes(copy)
  }

  const mostVoted = findMax(votes)

  return (
    <div> 
      <Header text="Anecdote of the day" />
      <div>
        {anecdotes[selected]}
      </div>
      <Summary value={votes[selected]} />
      <div>
        <Button onClick={handleVote} text="vote" />
        <Button onClick={handleNext} text="next anecdote" />
      </div>
      <Header text="Anecdote with most votes" />
      <div>
        {anecdotes[mostVoted]}
      </div>
      <Summary value={votes[mostVoted]} />
    </div>
  )
}

export default App