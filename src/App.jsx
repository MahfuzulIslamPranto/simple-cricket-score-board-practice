import { Suspense, useState } from 'react'
import CricketBoard from './cricket-board'
import './App.css'
import Users from './users'
import Posts from './posts'

const userFetch = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const postFetch = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  const postPromise = postFetch();
  const [count, setCount] = useState(0)
  return (
    <>
      <CricketBoard></CricketBoard>
      <Suspense fallback={<h4>Loading users...</h4>}>
        <Users userFetch={userFetch}></Users>
      </Suspense>
      <Suspense fallback={<h4>Loading posts...</h4>}>
        <Posts postFetch={postPromise}></Posts>
      </Suspense>
    </>
  )
}

export default App
