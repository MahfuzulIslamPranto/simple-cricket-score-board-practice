import { useState } from 'react'
import CricketBoard from './cricket-board'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CricketBoard></CricketBoard>
    </>
  )
}

export default App
