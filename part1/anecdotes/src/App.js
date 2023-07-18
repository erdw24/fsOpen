import { useState } from 'react'

const Anecdote = ({anecdotes,selected, votes}) => {
    return (
        <div>
            {anecdotes[selected]}
            <div>has {votes[selected]} votes</div>
        </div>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

//   state hooks
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)) 
  
  const handleClick = (index) => () => {
    // console.log(index)
    setSelected(index)
  } 

  const handleVote = () =>() => {
    
    const newvotes = [...votes]
    newvotes[selected] = votes[selected] + 1
    setVotes(newvotes)
  }
//   console.log("votes: ", votes, " index: ",selected)
  const maxvotes = votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  let rand = selected
  while(rand === selected) {
    rand = Math.floor(Math.random() * 8)
  }
  
  return (
    <div>
      <div><h1>Anecdote of the day</h1></div>
      <Anecdote votes={votes} selected={selected} anecdotes={anecdotes}/>
      <div>
          <button onClick={handleVote()}>vote</button>
          <button onClick={handleClick(rand)}>next quote</button>
      </div>
      <div><h1>Anecdote with most votes</h1></div>
      <Anecdote votes={votes} selected={maxvotes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App