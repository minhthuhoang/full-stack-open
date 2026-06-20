import { useState } from 'react'

const Header = (props) => <div><h1>{props.text}</h1></div>

const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )

const StatisticLine = (props) => (
  <div>
    {props.text} {props.value}
  </div>
)

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral

  if (all == 0) {
    return (
      <div>No feedback given</div>
    )
  }
  const average = all / 3
  const positive = props.good / all * 100

  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + ' %'} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log("the number of good reviews is", updatedGood)
  } 

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log("the number of bad reviews is", updatedBad)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log("the number of neutral reviews is", updatedNeutral)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <Header text="statistics"/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App