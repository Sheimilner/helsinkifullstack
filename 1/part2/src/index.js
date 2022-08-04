import { render } from '@testing-library/react';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const DisplayScore =(props)=> 

  <tbody>
  <td>{props.text}:</td> <td>{props.stat}</td>
  </tbody>


const DisplayStatistics=(props)=>{
return(
  <tbody>
  <td>{props.text}:</td> <td>{props.stat}</td>
  </tbody>
)

}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setToGood = () => {
    let newGood = good + 1
    console.log(newGood)
    setGood(newGood)
  }
  const setToNeutral = () => {
    let newNeutral = neutral + 1
    setNeutral(newNeutral)
  }
  const setToBad = () => {
    let newBad = bad + 1
    setBad(newBad)
  }



let total= good+bad+neutral;
let average= (good*1 + bad*-1 + neutral*0)/total;
let positive=good/total*100 +"%";



  return (
    <div>
      <h1>Give feedback</h1>
        <Button handleClick={() => setToGood()} text="Good" />
        <Button handleClick={() => setToNeutral()} text="Neutral" />
        <Button handleClick={() => setToBad()} text="Bad" />
      <h1>Statistics</h1>
        <table>
          <DisplayScore stat={good} text="Good"/>
          <DisplayScore stat={neutral} text="Neutral"/>
          <DisplayScore stat={bad} text="Bad"/>
        
        {total ?
          <>
            <DisplayStatistics stat={total} text="Total" />
            <DisplayStatistics stat={average} text="Average" />
            <DisplayStatistics stat={positive} text="Positive"/>
          </>
          :
          <p>No feedback Given</p>     
        }
        </table>

    </div>
  )
}
  ReactDOM.render( <App />, document.getElementById("root"))
