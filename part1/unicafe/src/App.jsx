import { useState } from 'react'

const Header = (props) => <div><h1>{props.text}</h1></div>

const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )

const Summary = (props) => (
  <div>
    <div>good {props.good}</div>
    <div>neutral {props.neutral}</div>
    <div>bad {props.bad}</div>
  </div>
)

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
      <Summary good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App