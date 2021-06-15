import React, { useState } from "react"
import { setTimeout } from "timers";

const Display = ({ counter, text }) => <div>{text} {counter}</div>

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => <Display counter={value} text={text} />

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No statistics yet
        </div>
    )
  }
  return (
    <div>
      <Statistic text="average" value={props.neutral / props.all} />
      <Statistic text="positive" value={props.good / props.all} />
      <Statistic text="bad" value={props.bad / props.all} />
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        This app is used by pressing buttons
        </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = (props) => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  }

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header text="Statistics" />
      <table>
        <tbody>
          <tr>
            <td><Display counter={good} text="good" /></td>
          </tr>
          <tr>
            <td><Display counter={neutral} text="neutral" /></td>
          </tr>
          <tr>
            <td><Display counter={bad} text="bad" /></td>
          </tr>
          <tr>
            <td><Display counter={all} text="all" /></td>
          </tr>
        </tbody>
      </table>
      <Statistics all={all} neutral={neutral} good={good} bad={bad} />
    </div >
  )
}

export default App;
