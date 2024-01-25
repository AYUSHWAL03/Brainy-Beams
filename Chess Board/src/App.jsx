import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChessBoard from './ChessBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2 className='text-2xl font-bold'>Chess Board</h2> */}
      <ChessBoard/>
    </>
  )
}

export default App
