import { useState } from 'react'
import CricketBoard from './cricket-board'
import './App.css'
import Users from './users'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CricketBoard></CricketBoard>
      <Users></Users>
    </>
  )
}

export default App
