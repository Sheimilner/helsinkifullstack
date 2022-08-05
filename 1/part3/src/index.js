import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=(props)=>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0})
  const [favourite, setFavourite] = useState(null);
  
  const setRandomAnecdote = ()=>{
    setSelected (Math.floor(Math.random() * 6))
    }

    const votation=()=>{
      setNewVote()
      setNewFavorite()
    }

    const setNewVote=()=> {
      const newPoints={...votes}
      newPoints[selected]++
      setVotes(newPoints)
      console.log(newPoints)

    }

    const setNewFavorite=()=> {
      let max=-1
      let indexwMax=-1
      for (let i in votes) {
        if(votes[i]>max){
          indexwMax=i
          max=votes[i]
        }
      }
      setFavourite(indexwMax)
    }


  


  return (
    <div>
      <h1>anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <Button handleClick={()=>votation()} text="vote this anecdote"></Button>
      <Button handleClick={()=>setRandomAnecdote()} text="New anecdote"></Button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[favourite]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root'))