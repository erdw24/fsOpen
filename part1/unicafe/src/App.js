import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Header = ({text}) => <h1>{text}</h1>

const StatisticLine = ({text,value, per}) => <tr><td>{text}</td><td>{value} {per}</td></tr>

const Statistics = ({good,neutral,bad}) => {
  const all = good+bad+neutral
  if(all>0)
  return (
    
    <>
      <div><Header text="statistics" /></div>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good}/>
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={all} />
          <StatisticLine text={"average"} value={((good-bad)/all).toFixed(1)} />
          <StatisticLine text={"positive"} value={((good/all)*100).toFixed(1)} per={"%"}/>
        </tbody>
      </table>
    </>
  )
  return(
    <>
      <div><Header text="statistics" /></div>
      <div>No feedback given</div>
    </> 


  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    
    <div>
      <><Header text="give feedback" /></>
      <>
        <Button handleClick = {() => setGood(good+1)} text={"Good"} />
        <Button handleClick = {() => setNeutral(neutral+1)} text={"Neutral"} />
        <Button handleClick = {() => setBad(bad+1)} text={"Bad"} />
      </>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App